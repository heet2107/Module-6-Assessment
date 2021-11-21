const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('shuffleArray function exists', () => {
        expect(shuffleArray).toBeDefined();
    });

    test('shuffleArray function with empty array input', () => {
        expect(shuffleArray([])).toEqual([]);
    });

    test('check that shuffleArray returns an array', () => {
        const input = [10, 5, 11, 25, 3, 0, 21]
        const shuffle = shuffleArray(input)

        expect(Array.isArray(shuffle)).toBeTruthy()
    });

    test('check that it returns an array of the same length as the argument sent in', () => {
        const input = [4,5,6]
        const shuffle = shuffleArray(input)
        const inputLength = input.length
        const shuffleLength = shuffle.length
        expect(inputLength).toEqual(shuffleLength);
    });

    test('check that the items have been shuffled around', () => {
        const input = [4,5,6]
        const shuffle = shuffleArray(input)

        expect(shuffle).not.toEqual(input);
    });

    test('check that all the same items are in the array', () => {
        const input = [10, 5, 11, 25, 3, 0, 21]
        const shuffle = shuffleArray(input)
        console.log(shuffle)
        const shuffleSort = shuffle.sort()
        console.log(shuffleSort)
        const inputSort = input.sort()
        console.log(inputSort)

        expect(shuffleSort).toEqual(inputSort);
    });
})