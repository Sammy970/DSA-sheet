function countNumbers(n) {
  const stringInput = n.toString().split("");
  return console.log(Object.values(stringInput).length);
}

function reverseNum(n) {
  let revNum = 0;
  while (n > 0) {
    let ld = n % 10;
    revNum = revNum * 10 + ld;

    n = Math.floor(n / 10);
  }

  return console.log(revNum);
}

function checkPalindrome(n) {
  let ogNum = n;
  let revNum = 0;

  while (n > 0) {
    let ld = n % 10;
    revNum = revNum * 10 + ld;

    n = Math.floor(n / 10);
  }

  if (ogNum === revNum) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

function findGCD(n1, n2) {
  let n1Factors = [];
  let n2Factors = [];

  for (let i = 1; i <= n1; i++) {
    if (n1 % i === 0) {
      n1Factors.push(i);
    }
  }

  for (let i = 1; i <= n2; i++) {
    if (n2 % i === 0) {
      if (n1Factors.includes(i)) {
        n2Factors.push(i);
      }
    }
  }

  return console.log(n2Factors[n2Factors.length - 1]);
}

function checkArmstrongNumber(n) {
  // define armstrong number
  // 153 = 1^3 + 5^3 + 3^3 = 153

  const allDigits = [];

  let count = 0;

  let ogNum = n;
  let tempNum = 0;

  while (n > 0) {
    allDigits.unshift(n % 10);
    count = count + 1;
    n = Math.floor(n / 10);
  }

  for (let i = 0; i < allDigits.length; i++) {
    tempNum = Math.pow(allDigits[i], count) + tempNum;
  }

  if (tempNum === ogNum) return true;
  else return false;
}

function printAllDivisors(n) {
  let allDivisors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      allDivisors.push(i);
    }
  }

  console.log(allDivisors);
}

function checkPrime(n) {
  let allDivisors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      allDivisors.push(i);
    }
  }

  if (allDivisors.length === 2) return console.log("Yes its prime");
  else return console.log("Its not prime");
}

function reverseArray(n) {
  let newArray = [];

  for (let i = n.length - 1; i >= 0; i--) {
    newArray.push(n[i]);
  }

  console.log(newArray);
}

function reverseArraySpaceOptimized(n) {
  let i = 0;
  while (i < n.length - 1) {
    let swap = n[i];
    n[i] = n[n.length - 1 - i];
    n[n.length - 1 - i] = swap;
    i++;
  }

  console.log(n);
}

function reverseArrayRecursive(n, i) {
  if (i > (n.length > 2 ? Math.floor(n.length / 2) : 0)) {
    console.log(n);
    return;
  }

  let swap = n[i];
  n[i] = n[n.length - 1 - i];
  n[n.length - 1 - i] = swap;

  // console.log(i, n);

  reverseArrayRecursive(n, i + 1);
}

function checkStringPalindrome(string) {
  string = string.toLowerCase();
  let temp = [];
  for (let i = string.length - 1; i >= 0; i--) {
    temp.push(string[i]);
  }

  temp = temp.join("");

  if (temp === string) {
    console.log("It is Palindrome");
  } else {
    console.log("Its not Palindrome");
  }
}

function checkStringPalindrome2ndApproach(string) {
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[string.length - i - 1]) {
      continue;
    } else {
      console.log("Not a Palindrome");
      return;
    }
  }

  console.log("Palindome");
}

function checkStringPalindromeRecursive(string, i) {
  string = string.toLowerCase();
  if (i > string.length) {
    console.log("Its a Palindrome");
    return;
  }

  if (string[i] === string[string.length - i - 1]) {
    // do nothing
  } else {
    console.log("Not a Palindome");
    return;
  }

  checkStringPalindromeRecursive(string, i + 1);
}

function printFibonacci(n) {
  let fibonacciNos = [0, 1];

  for (let i = 2; i <= n; i++) {
    let num = fibonacciNos[i - 1] + fibonacciNos[i - 2];
    // console.log(i, fibonacciNos[i - 1]);
    fibonacciNos.push(num);
    continue;
  }

  console.log(fibonacciNos);
}

function printFibonacciSpaceOptimized(n) {
  let first = 0;
  let second = 1;
  process.stdout.write(`${first},${second}`);
  for (let i = 2; i <= n; i++) {
    let temp = first + second;
    process.stdout.write(`,${temp}`);
    first = second;
    second = temp;
  }
}

function main() {
  countNumbers(5424);
  reverseNum(345);
  checkPalindrome(505);
  findGCD(15, 13);
  console.log(checkArmstrongNumber(1634));
  printAllDivisors(329823);
  checkPrime(4);
  reverseArray([1, 2, 3, 4, 5]);
  reverseArraySpaceOptimized([30, 40, 50]);
  reverseArrayRecursive([1, 2, 4], 0);
  checkStringPalindrome("ABCBA");
  checkStringPalindrome2ndApproach("ABCDCBA");
  checkStringPalindromeRecursive("ABCBA", 0);
  printFibonacci(6);
  printFibonacciSpaceOptimized(9);
}

main();
