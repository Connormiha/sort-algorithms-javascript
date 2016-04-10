'use strict';

const swap = require('./swap');

/**
 * Cocktail sort
 * @see https://en.wikipedia.org/wiki/Cocktail_shaker_sort
 * @param {Array} array
 * @return {Array}
 */
function cocktailSort(array) {
    array = array.slice();

    let left = 0;
    let right = array.length - 1;
    let moved = true;

    while (left < right && moved) {
        moved = false;

        for (let i = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                moved = true;
            }
        }

        right--;

        for (let i = right; i > left; i--) {
            if (array[i] < array[i - 1]) {
                swap(array, i, i - 1);
                moved = true;
            }
        }

        left++;
    }

    return array;
}

module.exports = cocktailSort;
