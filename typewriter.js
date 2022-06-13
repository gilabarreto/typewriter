const sentence = "hello there from lighthouse labs";

const delayString = function (string) {

  for (let x = 0; x < string.length; x++) {
    setTimeout(() => {
      process.stdout.write(string[x]);
    }, x * 50)
  }

}

delayString(sentence)