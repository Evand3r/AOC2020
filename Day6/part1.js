
const testData = `abc

a
b
c

ab
ac

a
a
a
a

b`;

const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.resolve(__dirname, 'input'), 'utf8');


const result = data.split('\n\n').reduce((acc, group) =>
  acc + new Set(group.replace(/\n/g, '').split('')).size,
  0)

console.log(result);