import assert from 'assert';

function f(arg: null | number): null | number {
  return arg;
}
function g(arg: boolean): boolean {
  return arg;
}

function h(a: null | number, b: boolean) {
  return f(a) || g(b);
}

assert.equal(h(1, true), 1);
assert.equal(h(1, false), 1);
assert.equal(h(0, true), true);
assert.equal(h(0, false), false);
assert.equal(h(null, true), true);
assert.equal(h(null, false), false);
