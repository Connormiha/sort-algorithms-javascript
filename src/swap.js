'use strict';

function swap(array, int1, int2) {
    let oldInt1 = array[int1];

    array[int1] = array[int2];
    array[int2] = oldInt1;
}

module.exports = swap;
