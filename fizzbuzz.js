function fizzbuzz() {
    let result = "";
    for (let i = 1; i < 201; i++) {
      if (Number.isInteger(i / 15)) {
        result += "FizzBuzz" + " - ";
      } else if (Number.isInteger(i / 3)) {
        result += "Fizz" + " - ";
      } else if (Number.isInteger(i / 5)) {
        result += "Buzz" + " - ";
      } else {
        result += i + " - ";
      }
    }
    result = result.slice(0, result.length - 3);
    result += ".";
    return result;
  }