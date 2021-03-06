// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];  // false
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]; // true
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]; // false
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]; // false
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]; // true

// Random generated arrays
const randomGenerated1 = [1,9,6,6,7,5,6,7,1,5,7,1,5,3,1,6]; // false
const randomGenerated2 = [5,0,4,9,5,7,8,0,2,0,8,5,0,7,8,4]; // false
const randomGenerated3 = [3,0,5,6,5,4,8,0,9,8,9,6,5,8,0,8]; // false
const randomGenerated4 = [6,7,5,0,8,9,2,5,9,7,7,7,6,7,7,5]; // false
const randomGenerated5 = [4,8,1,1,2,0,6,0,6,3,5,4,2,3,3,9]; // false


// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, 
    invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, randomGenerated1,
    randomGenerated2, randomGenerated3, randomGenerated4, randomGenerated5];

const randomCreditCardNumberGenerator = () => {
    let generatedNumbers = []
    for (let i=0; i<16; i++) {
        let number = Math.floor(Math.random() * 10)
        generatedNumbers.push(number);
    }
    return generatedNumbers;
}

// randomCreditCardNumberGenerator();

// Add your functions below:
const validateCred = (array) => {
  let sum = array[array.length-1];
  for (let i=array.length-2; i>=0; i--) {
    let digit = array[i];
    if (i % 2 === array.length % 2) {
      let doubledNum = digit * 2
      if (doubledNum >= 10) {
        doubledNum -= 9;
      }
      sum += doubledNum;
    } else {
      sum += digit;
    }
  }
  return sum % 10 === 0;
}

const findInvalidCards = (batchOfArrays) => {
  let result = [];
  for (let i=0; i<batchOfArrays.length; i++) {
    let test = validateCred(batchOfArrays[i]);
    if (test !== true) {
      result.push(batchOfArrays[i]);
    }
  }
  return result;
}

const idInvalidCardCompanies = (batchOfArrays) => {
  let companies = [];
  for (let i=0; i<batchOfArrays.length; i++) {
    switch(batchOfArrays[i][0]){
      case 3:
        if (!companies.includes(`Amex`)){
          companies.push(`Amex`);
        }
        break;
      case 4:
        if (!companies.includes(`Visa`)){
          companies.push(`Visa`);
        }
        break;
      case 5:
        if (!companies.includes(`Mastercard`)){
          companies.push(`Mastercard`);
        }
        break;
      case 6:
        if (!companies.includes(`Discover`)){
          companies.push(`Discover`);
        }
        break;
      default:
        console.log(`Company not found`);
    }
  }
  return companies;
}

console.log(validateCred(randomGenerated5));
// console.log(findInvalidCards(batch));
// console.log(idInvalidCardCompanies(findInvalidCards(batch)));







