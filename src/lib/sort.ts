export const desc = (a: string | number, b: string | number): 1 | -1 | 0 => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
};

export const asc = (a: number, b: number): 1 | -1 | 0 => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
};
