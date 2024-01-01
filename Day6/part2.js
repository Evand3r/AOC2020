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

const { readFileSync } = require('fs');
const path = require('path');
const data = readFileSync(path.resolve(__dirname, 'input'), 'utf8');


const result = data.split('\n\n').reduce((sum, group) => {
  const people = group.split('\n');
  const answersSet = new Set(people[0].split(''));

  people.slice(1).forEach((person) => {
    for (const answer of answersSet) {
      if(answersSet.size === 0) break;
      if (!person.includes(answer)) answersSet.delete(answer);
    }
  });

  return sum + answersSet.size;
}, 0)

console.log(result);

//3171 too low