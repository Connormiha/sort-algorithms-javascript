'use strict';

/**
 * Quicksort sort
 * @see https://en.wikipedia.org/wiki/Quicksort
 * @param {Number[]} array
 * @return {Number[]}
 */
function quickSort(array) {
    if (array.length === 0) {
        return array;
    }

    const a = [],
        b = [],
        p = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < p) {
            a.push(array[i]);
        } else {
            b.push(array[i]);
        }
    }

    return quickSort(a).concat(p, quickSort(b));
}

module.exports = quickSort;
