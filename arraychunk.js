/**
 * Given an 1D array, chunk into 2D based on int
 *
 * @param {*} arr Init array
 * @param {*} i Chunk size
 * @returns {Object} Chunked array object
 */
let arrayChunk = (arr, i) => {
    let tmp = [];
    let chunkedArr = [];

    // handle case chunk 0 or negatives
    if (i <= 0) {
        return [];
    }

    arr.map((d, index) => {
        tmp.push(d);
        const isModulo = index % i === i - 1;
        const isFinal = index === arr.length - 1;
        if (isModulo || isFinal) {
            chunkedArr.push(tmp);
            tmp = [];
        }
    });

    console.log(chunkedArr);
    return chunkedArr;
};

module.exports = {
    arrayChunk
}