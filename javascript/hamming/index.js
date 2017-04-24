// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.
'use strict';

module.exports = class Hamming {
	compute(strand1, strand2) {
		// we should probably make sure we're working with strings
		if (typeof strand1 !== 'string' || typeof strand2 !== 'string') {
			throw new TypeError('Both DNA strands must be strings.');
		}
		// make sure strands are same length
		if (strand1.length !== strand2.length) {
			throw new RangeError('DNA strands must be of equal length.');
		}
		// normalizing the strings takes some extra processing power, but might be necessary depending on context
		let strand1Normalized = strand1.toUpperCase();
		let strand2Normalized = strand2.toUpperCase();
		let count = 0;
		for (let index = 0; index < strand1Normalized.length; index++) {
			// we should probably throw when encountering a character which does not represent a nucleotide
			if (!this.isNucleotide(strand1Normalized[index]) || !this.isNucleotide(strand2Normalized[index])) {
				throw new RangeError('Both DNA strands must only contain valid nucleotide letters (A, C, G, or T).');
			}
			if (strand1Normalized[index] !== strand2Normalized[index]) {
				count++;
			}
		}
		return count;
	}

	isNucleotide(letter) {
		if (typeof letter !== 'string') {
			throw new TypeError('A nucleotide must be expressed as a string.');
		}
		if (letter.length !== 1) {
			throw new RangeError('A nucleotide must be one character long.')
		}
		if (letter === 'A' || letter === 'C' || letter === 'G' || letter === 'T') {
			return true;
		}
		return false;
	}
}
