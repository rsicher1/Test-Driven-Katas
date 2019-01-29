const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('Returns the correct string when no line breaks are needed and the string is not empty', () => {
    expect(wrap('Lorem ipsum dolor', 20)).to.equal('Lorem ipsum dolor');
  });

  it('Returns the correct string when only one line break is needed', () => {
    expect(wrap('Lorem ipsum dolor sit', 20)).to.equal(
      'Lorem ipsum dolor\nsit'
    );
  });

  it('Returns the correct string when multiple line breaks are needed', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    );

    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula. Hello world!',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac\nligula. Hello world!'
    );
  });
});
