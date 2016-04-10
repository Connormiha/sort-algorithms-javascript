'use strict';

const swap = require('./swap');

/**
 * Insertion sort
 * @see https://en.wikipedia.org/wiki/Insertion_sort
 * @param {Array} array
 * @return {Array}
 */
function insertionSort(array) {
    array = array.slice();

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (array[j] >= array[j - 1]) {
                break;
            }

            swap(array, j, j - 1);
        }
    }

    return array;
}

module.exports = insertionSort;
