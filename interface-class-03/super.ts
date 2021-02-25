class TestSuperClass {
    constructor(public p1: number, public p2: string, public p3: boolean) {}
}

class TestChildClass1 extends TestSuperClass {
    constructor(p1Child: number, p2Child: string, p3Child: boolean) {
        super(p1Child, p2Child, p3Child);
    }
}

const objFromChildClass1 = new TestChildClass1(123, "Hello", true);
console.log(objFromChildClass1);

class TestChildClass2 extends TestSuperClass {}

// Expected 3 arguments, but got 0.
const objFromChildClass2 = new TestChildClass2();
