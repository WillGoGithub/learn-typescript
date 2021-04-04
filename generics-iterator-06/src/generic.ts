// Multiple Generics
type TypeConversion<T, U> = (input: T) => U;

// Conditional Types
interface PersonalInfo {
  name: string;
  age?: number;
  hasPet?: boolean;
}

// let incompletePersonalInfo: Required<PersonalInfo> = {
//   name: 'A',
//   age: 20,
// };

// Default Type Parameter
type DefaultStringDictionary<T = string> = {
  [prop: string]: T;
};

// Type Constraint
type Primitives = number | string | boolean | null | undefined;

type PrimitivesArray<T extends Primitives> = Array<T>;

// Class
class Case<T> {
  constructor(public memberProp: T) {}

  public memberFunc() {
    return this.memberProp;
  }

  get value() {
    return this.memberProp;
  }

  set value(input: T) {
    this.memberProp = input;
  }
}
