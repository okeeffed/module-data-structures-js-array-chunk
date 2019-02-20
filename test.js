const lib = require('./arraychunk');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;
const arr = [
    1,
    2,
    3,
    4,
    5,
    6
];

describe('arraychunk', function () {
    it('should handle chunking 2', function () {
        expect(lib.arrayChunk(arr, 2))
            .to
            .deep
            .equal([
                [
                    1, 2
                ],
                [
                    3, 4
                ],
                [5, 6]
            ]);
    });

    it('should handle chunking 0', function () {
        expect(lib.arrayChunk(arr, 0))
            .to
            .deep
            .equal([]);
    });

    it('should handle chunking 3', function () {
        expect(lib.arrayChunk(arr, 3))
            .to
            .deep
            .equal([
                [
                    1, 2, 3
                ],
                [4, 5, 6]
            ]);
    });

    it('should handle chunking 4', function () {
        const res = lib.arrayChunk(arr, 4);
        const expected = [
            [
                1, 2, 3, 4
            ],
            [5, 6]
        ];

        expect(expected)
            .to
            .deep
            .equal(res);

    });

    it('should handle chunking 7', function () {
        const res = lib.arrayChunk(arr, 7);
        const expected = [
            [
                1,
                2,
                3,
                4,
                5,
                6
            ]
        ];

        expect(expected)
            .to
            .deep
            .equal(res);

    });
});