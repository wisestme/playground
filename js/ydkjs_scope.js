// "use strict"
function foo(a) {
  var b = 2;
  console.log('a scope');
  function bar() {
    console.log('another scope');
  }
  console.log('former scope');
  var c = 3;
}
