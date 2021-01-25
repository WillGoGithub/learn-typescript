interface Summation {
    (...args: number[]): number;
    (arr: number[]): number;
}

let F: Summation = function (p1: number | number[], ...args: number[]) {
    if (typeof p1 === 'number' &&
        args instanceof Array) {
        return args.reduce((acc, cur) => acc + cur, p1);
    } else if (p1 instanceof Array) {
        return p1.reduce((acc, cur) => acc + cur, 0);
    }

    throw new Error(`Wrong input`);
};

F(1, 2, 3, 4, 5);
F([1, 2, 3, 4, 5]);