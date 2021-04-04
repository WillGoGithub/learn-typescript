function delayAfter<T>(milliseconds: number, value: T): Promise<T> {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, milliseconds);
  });
}

async function example1() {
  const message = await delayAfter(3000, 'example1');

  console.log(message);
}

async function example2() {
  const message = await 'example2';

  console.log(message);
}

async function example3() {
  const message = await Promise.race([
    delayAfter(5000, 'Hi'),
    delayAfter(3000, 123),
    delayAfter(4000, true),
  ]);

  console.log(message);
}

async function example4() {
  const message = await Promise.all([
    delayAfter(5000, 'Hi'),
    delayAfter(3000, 123),
    delayAfter(4000, true),
  ]);

  console.log(message);
}

example1();
example2();
example3();
example4();

async function example5_1() {
  return await Promise.resolve(123);
}

async function example5_2() {
  return Promise.resolve(321);
}

console.log(example5_1());
console.log(example5_2());

async function example6_1() {
  console.log('First async function called.');
  return await delayAfter(1000, 'example6_1');
}

async function example6_2() {
  const result = await example6_1();
  console.log('Second async function called.');
  await delayAfter(2000, 'example6_2');
  return result;
}

example6_2().then(console.log);
