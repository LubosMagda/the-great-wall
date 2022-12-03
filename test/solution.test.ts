import { expect } from 'chai'
import { solutionFor } from '../src/solution'

describe('Solution', function () {
  it('should return correct result', () => {
    expect(solutionFor(undefined)).to.not.be.undefined
  })
})
