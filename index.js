const alienErrChecking = (str) => {
  if (!str) {
    return false
  }
  // regex for only ABZLCDR are allowed and the same char not more than 4.
  const regex = /^(?!.*(.)\1{3})[ABZLCDR]+$/;

  if (!regex.test(str)) {
    return false
  }
  return true
}


const alienNumeral = (str) => {
  const upperStr = str.trim().toUpperCase();
  if (!alienErrChecking(upperStr)) {
    return "Invalid alien numeral"
  }

  const alienMap = { "A": 1, "B": 5, "Z": 10, "L": 50, "C": 100, "D": 500, "R": 1000 };

  const strLen = upperStr.length;
  let result = 0;
  let lastNum = alienMap[upperStr[strLen - 1]];

  for (let i = (strLen - 1); i >= 0; i--) {
    const num = alienMap[upperStr[i]];

    if (lastNum > num) {
      result -= num
    } else {
      result += num
    }

    lastNum = num;
  }

  return result;
}



// from the direction.
console.log(alienNumeral("AAA"))
console.log(alienNumeral("LBAAA"))
console.log(alienNumeral("RCRZCAB"))

// example.
console.log(alienNumeral("ZAA"))
console.log(alienNumeral("ZZBAA"))
console.log(alienNumeral("AB"))
console.log(alienNumeral("AZ"))
console.log(alienNumeral("ZL"))
console.log(alienNumeral("ZC"))
console.log(alienNumeral("CD"))
console.log(alienNumeral("CR"))
console.log(alienNumeral("LBAAA"))



// this shold not a valid alien number sice they're wrote 4 as "AB" not "AAAA" for 4. 
console.log(alienNumeral("AAAA"))
console.log(alienNumeral("BBBB"))
console.log(alienNumeral("ZZZZ"))
console.log(alienNumeral("LLLL"))
console.log(alienNumeral("CCCC"))
console.log(alienNumeral("DDDD"))
console.log(alienNumeral("RRRR"))

// 1104
console.log(alienNumeral("RCAB"))
// invalid 1104
console.log(alienNumeral("RCAAAA"))
// 53
console.log(alienNumeral("LAAA"))
