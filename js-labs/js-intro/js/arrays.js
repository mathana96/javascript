/**
 * Created by mathana on 03/03/2017.
 */

const foo = [];

foo.push('a'); //adds to the back of array
foo.push('b');

console.log(foo[0]);
console.log(foo[1]);

console.log(foo.length);

foo.unshift('z'); //unshift adds new item to top/beginning of array

console.log(foo[0]);

foo.shift(); //removes first element from array
