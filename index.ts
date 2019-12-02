import assert from 'assert';

function f(arg: null | boolean): null | boolean {
  return arg;
}
function g(arg: boolean): boolean {
  return arg;
}

function h(a: null | boolean, b: boolean) {
  return f(a) || g(b);
}

assert.equal(h(true, true), true);
assert.equal(h(true, false), true);
assert.equal(h(false, true), true);
assert.equal(h(false, false), false);
assert.equal(h(null, true), true);
assert.equal(h(null, false), false);
