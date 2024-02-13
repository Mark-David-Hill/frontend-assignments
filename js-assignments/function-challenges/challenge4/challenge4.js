console.log("\nChallenge 4 Start:\n\n");

function alternate(array1, array2) {
  const length1 = array1.length;
  const length2 = array2.length;
  let maxLength = 0;
  if (length1 >= length2) {
    maxLength = length1;
  } else {
    maxLength = length2;
  }
  const newArray = [];
  for (let i = 0; i < maxLength; i++) {
    if (i < length1) {
      newArray.push(array1[i]);
    }
    if (i < length2) {
      newArray.push(array2[i]);
    }
  }
  return newArray;
}

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

console.log("EX: [1, 2, 3], [4, 5, 6] => [1, 4, 2, 5, 3, 6]");
console.log(alternate(nums1, nums2));
