interface AddOperation {
    addition(p1: number, p2: number): number;
    addition(p1: string, p2: string): number;
}

// Interface overload with never type (throw Error)
const implementAddition: AddOperation = {
    addition(p1: number | string, p2: number | string) {
        if (typeof p1 === 'number' && typeof p2 === 'number') {
            return p1 + p2;
        } else if (typeof p1 === 'string' && typeof p2 === 'string') {
            return parseInt(p1, 10) + parseInt(p2, 10);
        }

        throw new Error(`
            Parameter \`p1\` and \`p2\` should only accept both 
            \`number\` or \`string\` type.
        `);
    }
};

// String Literal Type
interface MyDocument {
    createElement(tag: 'a'): HTMLAnchorElement;
    createElement(tag: 'p'): HTMLParagraphElement;
    createElement(tag: 'body'): HTMLBodyElement;
    createElement(tag: 'input'): HTMLInputElement;
}

// Interface Merging
interface MergingInterface {
    createElement(tag: 'p'): HTMLParagraphElement;
    createElement(tag: 'body'): HTMLBodyElement;
    createElement(tag: 'div'): HTMLDivElement;
}

interface MergingInterface {
    createElement(tag: 'a'): HTMLAnchorElement;
    createElement(tag: 'span'): HTMLSpanElement;
    createElement(tag: 'input'): HTMLInputElement;
    
}

// Namespace with interface 
// 避免第三方套件汙染到全域
namespace StupidFramework {
    interface StupidRequest {
        headers: Headers[];
        body: Body;
        url: string;
        method: 'GET' | 'POST' | 'DELETE';
    }
}

// In other file
type QueryDictionary = { [propName: string]: string };

namespace StupidFramework {
    interface StupidRequest {
        query?: QueryDictionary
    }
}