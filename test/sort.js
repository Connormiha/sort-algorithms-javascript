'use strict';

const expect = require('chai').expect;
const tests = [
    'bubble',
    'bubble_v2',
    'insertion',
    'insertion_v2',
    'cocktail'
];

for (let item of tests) {
    describe(`Sort ${item}`, ()=> {
        const sort = require(`../src/${item}`);

        it('Should sort long array', ()=> {
            let arr = [1, 5, 9, 12, -10, 0, 15, 20, 100, 4];
            let arrCorrect = [-10, 0, 1, 4, 5, 9, 12, 15, 20, 100];

            expect(sort(arr)).eql(arrCorrect);
        });

        it('Should sort empty array', ()=> {
            expect(sort([])).eql([]);
        });

        it('Should sort one element array', ()=> {
            expect(sort([1])).eql([1]);
        });

        it('Should sort [2, 1] array', ()=> {
            expect(sort([2, 1])).eql([1, 2]);
        });

        it('Should sort [1, 0, 0, 0]', ()=> {
            expect(sort([1, 0, 0, 0])).eql([0, 0, 0, 1]);
        });
    });
}
