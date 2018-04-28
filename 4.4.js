function deepEqual(m, n) {
  if (m === n) return true;
  if (typeof m == "object" && typeof n == "object") {
    if ((m == null && n != null) || (m != null && n == null)) {
      return false;
    }
    for (let key in m)
      if (!deepEqual(m[key], n[key]))
        return false;

    for (let key in n)
      if (!deepEqual(m[key], n[key]))
        return false;

    return true;
  }
  return false;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));