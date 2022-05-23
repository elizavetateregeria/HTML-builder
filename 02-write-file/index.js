const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
const readline = require('readline');

const rl = readline.createInterface(stdin, stdout);

fs.writeFile(path.join(__dirname, 'input.txt'), '', err => {
  if (err) console.error(err.message);
});

stdout.write('Please, enter your text\n');
rl.on('line', textLine => {
  if (textLine === 'exit') {
    stdout.write('Thank you! Goodbye.');
    rl.close();
  } else {
    fs.appendFile(path.join(__dirname, 'input.txt'), `${textLine}\n`, err => {
      if (err) console.error(err.message);
    });
  }
});

rl.on('SIGINT', () => {
  stdout.write('Thank you! Goodbye.');
  rl.close();
});