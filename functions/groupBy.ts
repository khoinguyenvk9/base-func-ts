function groupBy(arr: any, cb: Function) {
  if (!Array.isArray(arr)) {
    throw new Error("expected an array for first argument");
  }

  if (typeof cb !== "function") {
    throw new Error("expected a function for second argument");
  }

  let result: any;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let bucketCategory = cb(item);
    let bucket = result[bucketCategory];

    if (!Array.isArray(bucket)) {
      result[bucketCategory] = [item];
    } else {
      result[bucketCategory].push(item);
    }
  }

  return result;
}

export default groupBy;
