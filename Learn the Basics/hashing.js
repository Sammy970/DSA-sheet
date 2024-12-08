function main() {
  const data = [1, 2, 1, 3, 2];
  const query = [1, 3, 4, 2, 10];
  // findQuery(data, query);
  // findQueryHashing(data, query);

  // findQueryString("abcdabefc", ["a", "z", "b"]);
  // findQueryStringHashing("abcabcdef", ["f", "z", "b"]);

  countFreqObj(data);
  countFreqMapArr(data);
}

function findQuery(n, query) {
  const temp = [];
  for (let i = 0; i < query.length; i++) {
    let toFind = query[i];
    temp.push(0);
    for (let j = 0; j < n.length; j++) {
      if (toFind === n[j]) {
        temp[i] = temp[i] + 1;
      }
    }
  }

  console.log("query  : ", query);
  console.log("data   : ", n);
  console.log("output : ", temp);
}

function findQueryHashing(data, query) {
  let hashedMap = {};

  let output = [];

  for (let i = 0; i < data.length; i++) {
    if (hashedMap[data[i]] === undefined) {
      hashedMap[data[i]] = 1;
    } else {
      hashedMap[data[i]]++;
    }
  }

  for (let i = 0; i < query.length; i++) {
    if (hashedMap[query[i]] !== undefined) {
      output.push(hashedMap[query[i]]);
    } else {
      output.push(0);
    }
  }

  console.log(output);
}

function findQueryString(string, query) {
  let outputArr = [];

  for (let i = 0; i < query.length; i++) {
    outputArr[i] = 0;
    for (let j = 0; j < string.length; j++) {
      if (query[i] === string[j]) {
        outputArr[i] = outputArr[i] + 1;
      }
    }
  }

  console.log(outputArr);
}

function findQueryStringHashing(string, query) {
  let hashedMap = {};
  let outputArr = [];

  for (let i = 0; i < string.length; i++) {
    if (hashedMap[string[i]] !== undefined) {
      hashedMap[string[i]] = hashedMap[string[i]] + 1;
    } else {
      hashedMap[string[i]] = 1;
    }
  }

  for (let i = 0; i < query.length; i++) {
    if (hashedMap[query[i]] !== undefined) {
      outputArr.push(hashedMap[query[i]]);
    } else {
      outputArr.push(0);
    }
  }

  console.log(outputArr);
}

function countFreqObj(arr) {
  let countMap = {};

  for (num of arr) {
    if (countMap[num] === undefined) {
      countMap[num] = 1;
    } else {
      countMap[num]++;
    }
  }

  console.log(countMap);
}

function countFreqMapArr(arr) {
  let countMap = new Map();

  for (num of arr) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1);
    } else {
      countMap.set(num, 1);
    }
  }

  console.log(countMap);
}

main();
