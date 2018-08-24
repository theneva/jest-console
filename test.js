test('console', () => {
  // given:
  const spy = jest.spyOn(global.console, 'log');

  const subject = require('./subject');

  expect(spy).toHaveBeenCalledTimes(1);
});
