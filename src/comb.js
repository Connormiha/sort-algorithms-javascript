'use strict';

const swap = require('./swap');

/**
 * Cocktail sort
 * @see https://en.wikipedia.org/wiki/Comb_sort
 * @param {Array} array
 * @return {Array}
 */
function cocktailSort(array) {
    array = array.slice();

    let left = 0;
    let right = array.length - 1;
    let swapped = true;

    while (left < right && swapped) {
        swapped = false;

        for (let i = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }

        right--;

        for (let i = right; i > left; i--) {
            if (array[i] < array[i - 1]) {
                swap(array, i, i - 1);
                swapped = true;
            }
        }

        left++;
    }

    return array;
}

module.exports = cocktailSort;
