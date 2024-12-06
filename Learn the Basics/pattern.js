const pattern1 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("* ");
    }
    console.log(""); // Add a newline after each row
  }
};

const pattern2 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log("");
  }
};

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j} `);
    }
    console.log("");
  }
}

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    // row iteration
    for (let j = 1; j <= i; j++) {
      // column iteration
      process.stdout.write(`${i} `);
    }
    console.log("");
  }
}

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      process.stdout.write("* ");
    }
    console.log("");
  }
}

function pattern6(n) {
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(`${j + 1} `);
    }
    console.log("");
  }
}

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    console.log(" ");
  }
}

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    console.log(" ");
  }
}

function main() {
  //   pattern1(5); // Box pattern
  //   pattern2(5); // Left side triangle pattern
  //   pattern3(5);
  //   pattern4(5);
  //   pattern5(5);
  //   pattern6(5);
  //   pattern7(5);
  pattern8(5);
}

main();
