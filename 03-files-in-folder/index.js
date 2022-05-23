const { readdir, stat } = require('fs').promises;
const path = require('path');

const getFilesInfo = async () => {
  try {
    const files = await readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true });
    for (const file of files) {
      if (!file.isDirectory()) {
        const fileSize = (await stat(path.join(__dirname, 'secret-folder', file.name))).size / 1024;
        const extension = path.extname(file.name);
        const name = path.basename(file.name, extension);
        console.log(`${name} - ${extension.slice(1)} - ${fileSize}kb`);
      }
    }
  } catch (error) {
    console.err(error.message);
  }
};

getFilesInfo();