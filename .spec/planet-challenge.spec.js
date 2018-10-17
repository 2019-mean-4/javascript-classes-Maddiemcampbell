const { planet } = require('../planet-challenge/planet')
const { krypton } = require('../planet-challenge/planet')
const { omicronPersei8 } = require('../planet-challenge/planet')
const { nemesis } = require('../planet-challenge/planet')

test(`planet class should exist`, () => {
  const planet1 = new planet(10, 'purple')
  expect(typeof planet1).toBe('object')
})
test(`We should see three planet instances`, () => {
  let itexists = false;
  if (krypton && omicronPersei8 && nemesis) itexists = true;
  expect(itexists).toBe(true);
})
test(`The planets should have width and color properties`, ()=> {
  let hasProperties = false;
  if (krypton.width && krypton.color && omicronPersei8.width && omicronPersei8.color && nemesis.width && nemesis.color) hasProperties = true;
  expect(hasProperties).toBe(true);
})