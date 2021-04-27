/**
 * Returns an array of serial numbers of integer values ​​starting with START and ending with END
 * @param {number} start
 * @param {number} end
 * @returns {number[]} serial numbers
 */
export const range = (start: number, end: number): number[] => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
};
