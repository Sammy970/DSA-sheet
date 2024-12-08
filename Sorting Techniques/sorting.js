function main() {
  let n = 6;
  let arr = [13, 46, 24, 52, 20, 9];
  // selectionSort(n, arr);
  // selectionSort2(n, arr);
  // selectionSortEasy(n, arr);

  bubbleSort(n, arr);
}

main();

function selectionSort(n, arr) {
  console.log(arr);
  for (let i = 0; i < n - 1; i++) {
    let minI = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[minI]) {
        minI = j;
      }
    }

    let temp = arr[minI];
    arr[minI] = arr[i];
    arr[i] = temp;
  }

  console.log(arr);
}

function selectionSort2(n, arr) {
  console.log(arr);

  for (let i = 0; i < n - 1; i++) {
    let minimumI = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[minimumI]) {
        minimumI = j;
      }
    }

    let temp = arr[minimumI];
    arr[minimumI] = arr[i];
    arr[i] = temp;
  }

  console.log(arr);
}

function selectionSortEasy(n, arr) {
  console.log(arr);

  for (let i = 0; i < n; i++) {
    console.log("Updated arr: ", arr);
    for (let j = i + 1; j < n; j++) {
      console.log("i = ", i, "j =", j, "/", arr[i], arr[j]);
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

function bubbleSort(n, arr) {
  console.log(arr);
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  console.log(arr);
}
