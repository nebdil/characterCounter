var lettersArr = (process.argv[2].replace(/\s/g, '').split(""));
var obj = {};

function countLetters() {
  lettersArr.forEach(function(e) {
    if (!(e in obj)) {
      obj[e] = 1;
    }
    else {
      obj[e] += 1;
    }
  })
}

countLetters();
console.log(obj);