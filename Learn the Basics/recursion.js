function main() {
  // testRecursion();
  // printName(1, 2);
  // printNto1(5, 3);
  // sumOfNaturalNumbers(12, (sum = 0));
  factorial(3, (output = 1));
}

main();

let count = 0;
function testRecursion() {
  console.log("This is me", count);
  count++;
  if (count === 3) {
    return;
  } else {
    testRecursion();
  }
}

function printName(i, times) {
  if (i > times) return;
  console.log("Hey my name is Samyak");
  printName(i + 1, times);
}

function printNto1(i, n) {
  if (i < n) return;
  console.log(i);
  printNto1(i - 1, n);
}

function sumOfNaturalNumbers(n, sum) {
  if (n < 1) {
    console.log("total sum: ", sum);
    return;
  }
  sumOfNaturalNumbers(n - 1, sum + n);
}

// factorial of 2 = 1*2 +

function factorial(n, output) {
  if (n < 1) {
    console.log(output);
    return;
  }
  output = output * n;
  factorial(n - 1, output);
}
