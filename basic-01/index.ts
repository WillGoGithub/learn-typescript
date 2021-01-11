// TDZ = Temporal dead zone
let tdz: string;
// let t = tdz;

let absolutelyEitherNullOrString: string | null = null;

absolutelyEitherNullOrString = 'string';
absolutelyEitherNullOrString = null;

// block-scope
let name: string = 'ad';