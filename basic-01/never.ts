let executeForever = (): never => {
    while (true) {
        //
    }
};

// void 函式回傳型別推論不受條件邏輯影響
let executeVoid = (num: number) => {
    while (num > 5) {

    }
};

/*
 * The never type has the following characteristics:
 *
 * 第一點：never is a subtype of and assignable to every type.
 * 第二點：No type is a subtype of or assignable to never (except never itself).
 * 第三點：In a function expression or arrow function with no return type annotation, if the function has no return statements, or only return statements with expressions of type never, and if the end point of the function is not reachable (as determined by control flow analysis), the inferred return type for the function is never.
 * 第四點：In a function with an explicit never return type annotation, all return statements (if any) must have expressions of type never and the end point of the function must not be reachable.
*/

type WontBeNever = T | never;
// => WontBeNever: T

type MustBeNever = U & never;
// => MustBeNever: never