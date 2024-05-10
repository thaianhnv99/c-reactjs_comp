export function sleep(ms = 2000): Promise<void> {
  console.log('Kindly remember to remove `sleep`');
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function quickSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const arrClone = arr.slice(0, -1);
  const left = [];
  const right = [];
  arrClone.forEach((value) => {
    if (value < pivot) {
      left.push(value);
    } else {
      right.push(value);
    }
  });

  return [...quickSort(left), pivot, ...quickSort(right)];
}
