const expect = require('chai').expect
const cleanURL = require('../src/cleanURL')

describe('cleanURL', () => {
  beforeEach(() => {

  })
  afterEach(() => {

  })
  it('should strip out all consecutive spaces after the first', () => {
    expect(cleanURL('this  is the title!')).to.equal('this-is-the-title')
  })
  it('should strip out all non letters, numbers and spaces', () => {
    expect(cleanURL('this is the title!')).to.equal('this-is-the-title')
  })
  it('should convert all the spaces to dashes', () => {
    expect(cleanURL('this is the title')).to.equal('this-is-the-title')
  })
  it('should convert all the uppercase letters to lowercase', () => {
    expect(cleanURL('THIS IS THE TITLE')).to.equal('this-is-the-title')
  })
  it('complex example', () => {
    expect(cleanURL('TH#%$^IS      IS T$%^&HE TI)(*&^%$#TLE')).to.equal('this-is-the-title')
  })
})
