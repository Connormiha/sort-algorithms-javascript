'use strict';

const expect = require('chai').expect;
const tests = [
    'bubble',
    'bubble_v2',
    'insertion',
    'insertion_v2',
    'cocktail',
    'comb',
    'heap',
    'quickSort'
];

for (let item of tests) {
    describe(`Sort ${item}`, () => {
        const sort = require(`../src/${item}`);

        it('should sort long array', () => {
            let arr = [1, 5, 9, 12, -10, 0, 15, 20, 100, 4];
            let arrCorrect = [-10, 0, 1, 4, 5, 9, 12, 15, 20, 100];

            expect(sort(arr)).to.eql(arrCorrect);
        });

        it('should sort empty array', () => {
            expect(sort([])).to.eql([]);
        });

        it('should sort one element array', () => {
            expect(sort([1])).to.eql([1]);
        });

        it('should sort [2, 1] array', () => {
            expect(sort([2, 1])).to.eql([1, 2]);
        });

        it('should sort [1, 0, 0, 0]', () => {
            expect(sort([1, 0, 0, 0])).to.eql([0, 0, 0, 1]);
        });

        it('should sort [1, 0, 0, 1]', () => {
            expect(sort([1, 0, 0, 1])).to.eql([0, 0, 1, 1]);
        });

        it('should sort [0, 0, 0, 1]', () => {
            expect(sort([0, 0, 0, 1])).to.eql([0, 0, 0, 1]);
        });

        it('should sort [0, 0, 0, 0]', () => {
            expect(sort([0, 0, 0, 0])).to.eql([0, 0, 0, 0]);
        });

        it('should sort [0, 3, 0]', () => {
            expect(sort([0, 3, 0])).to.eql([0, 0, 3]);
        });
    });
}
