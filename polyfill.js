function polyfillForReduce() {
 if (Array.prototype.reduce) { //check reduce is supported. 
  console.log('Reduce is available')

  function reduce(callback, initializer) {
   // Here we have to write the function for reduce functionallity
   console.log('we are in out custom reduce', callback, initializer)
  }
  Array.prototype.reduce = reduce;
 } else { // where reduce is not supported.
  console.log('Reduce is not available')


 }
}

polyfillForReduce();
[1, 2, 3].reduce((this, val))