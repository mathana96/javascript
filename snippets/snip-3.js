const getTotal = function (args) {
  let result = 0;
  for (let i = 0, len = args.length; i < len; i++) {
    result += args[i];
  }

  return result;
};

// console.log('Total is', getTotal([2, 3, 4]));

console.log('log first');
function getData() {
  console.log('Output: ', getTotal([2, 3, 4]));
}

setTimeout(getData, 6000);
console.log('log last');
