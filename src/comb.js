'use strict';

const swap = require('./swap');

/**
 * Comb sort
 * @see https://en.wikipedia.org/wiki/Comb_sort
 * @param {Array} array
 * @return {Array}
 */
function cocktailSort(array) {
    array = array.slice();

    let gap = array.length;
    let swapped = false;

    while (swapped || gap > 1) {
        if (gap > 1) {
            gap = parseInt(gap / 1.247);
        }

        swapped = false;

        for (let i = 0; i + gap < array.length; i++) {
            if (array[i] > array[i + gap]) {
                swap(array, i, i + gap);
                swapped = true;
            }
        }
    }

    return array;
}

module.exports = cocktailSort;
