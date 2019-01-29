const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns an empty array for twoSum([1,2,3],6)', () => {
    expect(twoSum([1, 2, 3], 6)).to.eql([]);
  });
  it('Returns indexes 1 and 2 for twoSum([1,2,3],5)', () => {
    expect(twoSum([1, 2, 3], 5)).to.eql([1, 2]);
  });
});
