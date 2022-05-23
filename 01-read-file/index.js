const fs = require('fs');
const path = require('path');
const readStr = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

let data = '';

readStr.on('data', chunk => data += chunk);
readStr.on('end', () => console.log(data));
readStr.on('error', error => console.error('error', error.message));

