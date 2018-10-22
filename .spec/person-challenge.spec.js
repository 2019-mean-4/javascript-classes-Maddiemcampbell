const { person } = require('../person-challenge/person');
const { humanoidA } = require('../person-challenge/person');

const humanoidB = new person('Rick', 'Astley', 52)

test('person class should exist', () => { 
  expect(typeof humanoidB).toBe('object')
})
test('humanoidA should exist', () => {
  expect(Boolean(humanoidA)).toBe(true)
})
test('humanoidA has firstName, lastName, age and isAlive properties', () => {
  let hasProperties = false
  if(humanoidA.firstName && humanoidA.lastName && humanoidA.age && humanoidA.isAlive) hasProperties = true
  expect(hasProperties).toBe(true)
})
test('Newly created person instances are alive by default', () => {
  expect(humanoidB.isAlive).toBe(true)
})