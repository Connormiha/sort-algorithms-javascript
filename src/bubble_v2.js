'use strict';

const swap = require('./swap');

/**
 * Bubble sort
 * @see https://en.wikipedia.org/wiki/Bubble_sort
 * @param {Array} array
 * @return {Array}
 */
function bubbleSort(array) {
    array = array.slice();

    let i = array.length - 1;
    let j = 0;

    while (i > 0) {
        if (j === i) {
            j = 0;
            i--;
            continue;
        }

        if (array[j] > array[j + 1]) {
            swap(array, j, j + 1);
        }

        j++;
    }

    return array;
}

module.exports = bubbleSort;
