console.log("\nChallenge 10 Start:\n\n");

// Write a function that takes a base value and an exponent and will return the product (power).
// pow(4,2) => 16

// Note: No outside of pre-built functions and the '**' exponent operator is not allowed.

function pow(baseVal, exponent) {
  product = baseVal;
  for (let i = 1; i < exponent; i++) {
    product *= baseVal;
  }
  return product;
}

console.log(pow(4, 2));
