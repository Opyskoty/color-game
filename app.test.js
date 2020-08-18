describe("#randNum", function () { 
it('should generate a random number between a max and min', function () {
  expect(randNum(1,3)).toBeGreaterThan(0);
  expect(randNum(2,5)).toBeLessThan(6);
})
})

describe("#randomRgb", function () {
  it('should generate a random rgb code', function () {
    expect(randomRgb()).toContain('rgb(')
  })
})