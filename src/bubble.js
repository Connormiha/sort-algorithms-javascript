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

    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }

    return array;
}

module.exports = bubbleSort;
