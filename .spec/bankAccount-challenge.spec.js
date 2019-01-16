const { bankAccount } = require('../bankAccount-challenge/bankAccount')

const myAccount = new bankAccount('Tywinn Lanister', 50000000)

test(`The bankAcount class should exist`, () => {
  expect(typeof myAccount).toBe('object');
})
test('BankAccount instances should have 3 properties', () => {
  let hasProperties = false
  if(myAccount.balance && myAccount.owner && myAccount.transactions) hasProperties = true;
  expect(hasProperties).toBe(true);
})
test('Should be able to retrieve balance', () => {
  let balance = myAccount.getBalance()
  expect(balance).toBe(50000000)
})
test('Should be able to withdrawal an amount', () => {
  myAccount.withdrawal(25000000)
  expect(myAccount.balance).toBe(25000000)
})
test('should be able to deposit an amount', () => {
  myAccount.deposit(10000000)
  expect(myAccount.balance).toBe(35000000)
})
test('Transactsions should be tracked', () => {
  let length = myAccount.transactions.length
  expect(length > 0).toBe(true)
})
