function reverseString1(str) {
  const result = [];

  if (!str || str.length < 2 || typeof str !== "string") {
    return "It's not possible. Put in another string.";
  }

  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    result.push(str[i]);
  }

  // console.log(result);

  return result.join("");
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

const reverseString3 = (str) => [...str].reverse().join("");

reverseString3("It's difficult");
