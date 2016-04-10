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

    let j = 1;
    let i = 1;

    while (i < array.length) {
        if (j === 0 || array[j] >= array[j - 1]) {
            i++;
            j = i;
            continue;
        }

        swap(array, j, j - 1);
        j--;
    }

    return array;
}

module.exports = insertionSort;
