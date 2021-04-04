// Map
let typedMap = new Map<number, string>();

typedMap.set(1, 'Hi');
typedMap.get(1);
typedMap.has(1);

// Set
let typedSet = new Set<number>();

typedSet.add(123);
typedSet.values();
typedSet.clear();

// Promise
const url = 'https://google.com.tw';

function sentRequest(url: any, arg1: (response: any) => void) {
  //
}

let request = new Promise((resolve, reject) => {
  sentRequest(url, (response) => {
    switch (response.status) {
      case 200:
        resolve(response.data);
        break;
      case 404:
        reject('404 Not Found.');
        break;
      case 500:
        reject('500 Internal Serve Error.');
        break;
    }
  });
});

request.then((data) => console.log(data)).catch((err) => console.log(err));

// Promise All
const promiseAll = Promise.all([
  Promise.resolve('123'),
  new Promise<number>((resolve) => resolve(123)),
  new Promise<boolean>((resolve) => resolve(true)),
]);

// Promise Race
function delay<T>(milliseconds: number, value: T): Promise<T> {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, milliseconds);
  });
}

const promiseRace = Promise.race([
  delay<string>(3000, 'Hi'),
  delay<number>(1000, 123),
  delay<boolean>(2000, false),
]);

// const promiseTimeout = Promise.race(
//   arbitraryRequest,
//   rejectDelay<string>(3000, '408 Timeout after 3 seconds');
// );

console.time(`1st Request Received`);
console.time(`2st Request Received`);
console.time(`3st Request Received`);

let attempts = 1;

function sendRequestAsPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      reject('500 Server Error');
      return;
    }

    const time = Math.random() * 3000;
    setTimeout(() => {
      resolve('200 Success');
    }, time);
  });
}

sendRequestAsPromise()
  .then(
    (result) => {
      console.timeEnd(`1st Request Received`);
      console.log(`1st attempt ${result}`);
      attempts++;

      return sendRequestAsPromise();
    },
    (err) => {
      console.log(`${attempts} failed: ${err}`);
    }
  )
  // .catch((err) => {
  //   console.log(`${attempts} failed: ${err}`);
  // })
  .then(
    (result) => {
      console.timeEnd(`2st Request Received`);
      console.log(`2st attempt ${result}`);
      attempts++;

      return sendRequestAsPromise();
    },
    (err) => {
      console.log(`${attempts} failed: ${err}`);
    }
  )
  // .catch((err) => {
  //   console.log(`${attempts} failed: ${err}`);
  // })
  .then(
    (result) => {
      console.timeEnd(`3st Request Received`);
      console.log(`3st attempt ${result}`);
    },
    (err) => {
      console.log(`${attempts} failed: ${err}`);
    }
  );
// .catch((err) => {
//   console.log(`${attempts} failed: ${err}`);
// });

// Generator Functions
function* numbersIteratorGenerator() {
  console.log(`test`);

  yield 1;
  yield 2;
  yield 3;
  yield 4;
  // yield 5; done = false
  return 5; // done = true
}

console.log(`Before create iterator`);
const numbersIter = numbersIteratorGenerator();
console.log(`After create iterator`);

console.log(`Before 1st next`);
console.log(numbersIter.next());
console.log(`After 1st next`);
console.log(numbersIter.next());
console.log(numbersIter.next());
console.log(numbersIter.next());
console.log(numbersIter.next());
console.log(numbersIter.next());

// Fibonacci yield + 惰性求值 Lazy Evaluation
function* fibonacci() {
  let n0 = 1;
  let n1 = 2;

  while (true) {
    yield n0;

    [n0, n1] = [n1, n0 + n1];
  }
}

const fibSeries = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(fibSeries.next());
}

console.log('===Default summationGenerator===');
// Default summationGenerator
function* summationGenerator(defaultValue: number = 0) {
  let total = defaultValue;

  while (true) {
    total = yield total;
    defaultValue += total;
  }
}

let summationIter = summationGenerator();

console.log(summationIter.next(5));
console.log(summationIter.next(7));
console.log(summationIter.next(11));
