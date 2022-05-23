const { readdir, mkdir, copyFile, rm } = require('fs').promises;
const path = require('path');

const copyFiles = async () => {
  try {
    await rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true });
    await mkdir(path.join(__dirname, 'files-copy'), { recursive: true });

    const files = await readdir(path.join(__dirname, 'files'));
    for (let file of files) {
      await copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file));
    }
  } catch (error) {
    console.error(error.message);
  }
};

copyFiles();