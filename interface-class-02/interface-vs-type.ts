// Interface Extension/Inheritance
type T = number;
interface I {
    a: string;
}

type U = T & I;

interface J extends T, I { }

// Declaration Merging
interface A {
    p1: number;
    p2: string;
}

interface A {
    p3: number;
    p4: string;
}

const a: A = {
    p1: 1,
    p2: 'a',
    p3: 3,
    p4: 'b',
};

//
interface AccountSystem {
    email: string;
    password: string;
    subscribed: boolean;
}

interface AccountInfo {
    nickname: string;
    age: number;
    gender: Gender;
}

type User = AccountSystem & AccountInfo;
