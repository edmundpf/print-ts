import Print from '../'
import chai from 'chai'
const should = chai.should()

/**
 * Print Class
 */

describe('Print Class', () => {
	it('Is function', () => {
		Print.should.be.a('function')
	})
})