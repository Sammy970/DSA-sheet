const { exit } = require("process");
const readline = require("readline");

const cmd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readInputFromCmd() {
  // read from command line
  cmd.question("What is your name? ", (name) => {
    console.log(`Hello ${name}`);
    cmd.close();
  });
}

function conditions() {
  cmd.question("Enter your grade => ", (grade) => {
    const gradeInt = parseInt(grade);

    if (gradeInt >= 80 && gradeInt < 100) {
      console.log("You got an A");
    } else if (gradeInt >= 50 && gradeInt < 80) {
      console.log("You got a B");
    } else if (gradeInt >= 30 && gradeInt < 50) {
      console.log("You got a C");
    } else {
      console.log("You got an F");
    }

    cmd.close();
  });
}

function switchCases() {
  cmd.question("Enter the Day of Week => ", (day) => {
    const dayInt = parseInt(day);

    switch (dayInt) {
      case 1:
        console.log("You have selected Monday");
        break;
      case 2:
        console.log("You have selected Tuesday");
        break;
      case 3:
        console.log("You have selected Wednesday");
        break;
      case 4:
        console.log("You have selected Thursday");
        break;
      case 5:
        console.log("You have selected Friday");
        break;
      case 6:
        console.log("You have selected Saturday");
        break;
      case 7:
        console.log("You have selected Sunday");
        break;

      default:
        console.log("Invalid Day");
    }

    cmd.close();
  });
}

function forLoops() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log("This number is even - ", i);
    } else {
      console.log("This number is odd - ", i);
    }
  }
}

function whileLoops() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let target = 6;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      console.log("Target found at index - ", i);
      break;
    }

    console.log("Current number - ", numbers[i]);
  }

  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }

    console.log("Odd number - ", i);
  }
}

function main() {
  const startTime = performance.now();

  // readInputFromCmd();
  // conditions();
  // switchCases();
  // forLoops();
  // whileLoops();

  const endTime = performance.now();
  const TimeInSec = endTime - startTime;
  console.log("Time taken - ", TimeInSec.toFixed(2), " miliseconds");
  exit(); // exit the process
}

main();
