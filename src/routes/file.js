const fs = require('fs');

module.exports.getFilesNames = (req, res) => {
  fs.readdir('./src/data', (err, files) => {
    if (err) {
      console.log(`Unable to scan diretory: ${err}`);
      return;
    }

    res.send({ filesNames: files });
  });
};

module.exports.getFileContent = (req, res) => {
  const { fileName } = req.query;
  fs.readFile(`./src/data/${fileName}`, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    res.send(data);
  });
};
