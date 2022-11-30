// Drink Sorting //

console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');

{
  function sortDrinkByPrice(drinks) {
  drinks.sort(function (a, b){
  return a.price - b.price;})
  return drinks.sort()
}


  function sortDrinkByPrice(drinks) {
      drinks.sort((a, b) => (a.price > b.price) ? 1 : -1)
      return drinks.sort()}

  const drinks1 = [
      {name: 'lemonade', price: 90}, 
      {name: 'lime', price: 432}, 
      {name: 'peach', price: 23}];

  const drinks2 = [
      {name: 'water', price: 120}, 
      {name: 'lime', price: 80}, 
      {name: 'peach', price: 90}];

  const result1 = sortDrinkByPrice(drinks1);
  const result2 = sortDrinkByPrice(drinks2);

  console.log(
      result1,
      result2,)
}

console.groupEnd();

/////////////////////////////////////////////////////////////


// Burglary Series (04): Add its Name //


console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');

{
  function addName(obj, name, value) {
      obj[name] = value
      return obj
  }

  const result1 = addName({}, "Brutus", 300)
  const result2 = addName({ piano: 500 }, "Brutus", 400)
  const result3 = addName({ piano: 500, stereo: 300 }, "Caligula", 440)

  console.log(
  result1,
  result2,
  result3)
}

console.groupEnd();

/////////////////////////////////////////////////////////////

// Which Generation Are You? //

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');

{
  function generation(x, y) {
      let f = ['great grandmother','grandmother','mother','me!','daughter','granddaughter','great granddaughter']
      let m = ['great grandfather','grandfather','father','me!','son','grandson','great grandson']
      return y === 'm' ? m[3+x] : f[3+x]
  }
  
  const result1 = [generation(-3, "f"), generation(-3, "m")]
  const result2 = [generation(-2, "f"), generation(-2, "m")]
  const result3 = [generation(-1, "f"), generation(-1, "m")]
  const result4 = [generation(0, "f"), generation(0, "m")]
  const result5 = [generation(1, "f"), generation(1, "m")]
  const result6 = [generation(2, "f"), generation(2, "m")]
  const result7 = [generation(3, "f"), generation(3, "m")]


  console.log(
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
  result7)
}

console.groupEnd();

/////////////////////////////////////////////////////////////

// Scrabble Hand //

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');

{
  function maximumScore(tileHand) {
      return tileHand.reduce(
      (title, score) => title + score.score, 0)
  }

  const result1 = maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}])
  const result2 = maximumScore([{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}])
  const result3 = maximumScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}])
  const result4 = maximumScore([{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}])

  console.log(
  result1,
  result2,
  result3,
  result4,
  )

}

console.groupEnd();

/////////////////////////////////////////////////////////////

// Burglary Series (10): Calculate Difference //

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');

{
  function calculateDifference(obj, limit) {
      return (Object.values(obj)).reduce((a, b) => a + b) - limit;
  }

  const result1 = calculateDifference({ skate: 20000, painting: 30000, shoes: 1 }, 50000)
  const result2 = calculateDifference({ "baseball bat": 31}, 10)
  const result3 = calculateDifference({stereo: 110, pillow: 41}, 100)

  console.log(
  result1,
  result2,
  result3)
}

console.groupEnd();

/////////////////////////////////////////////////////////////

// Converting Objects to Arrays //

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
      return Object.entries(obj)
  }

  const result1 = toArray({ a: 1, b: 2 });
  const result2 = toArray({ foo: 33, bar: 45, baz: 67 });
  const result3 = toArray({ shrimp: 15, tots: 12 });

  console.log(
  result1,
  result2,
  result3)
}

console.groupEnd();

/////////////////////////////////////////////////////////////

// Printer Levels //

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');

{
  function inkLevels(inks) {
      return Math.min(...Object.values(inks))
  }

  const result1 = inkLevels({
      "cyan": 23,
      "magenta": 12,
      "yellow": 10
  })
  
  const result2 = inkLevels({
      "cyan": 432,
      "magenta": 543,
      "yellow": 777
  })

  const result3 = inkLevels({
      "cyan": 700,
      "magenta": 700,
      "yellow": 0
  })

  console.log(
  result1,
  result2,
  result3)
}
console.groupEnd();

/////////////////////////////////////////////////////////////

// Burglary Series (01): Calculate Total Losses //

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');

{
  function calculateLosses(obj) {
      for (let a in obj) {
          return Object.values(obj).reduce((a, c) => a + c)
    }
    return 'Lucky you!'
  }
  
  const result1 = calculateLosses({
      tv: 30,
      skate: 20,
      stereo: 50,
  });

  const result2 = calculateLosses({
      ring: 30000,
      painting: 20000,
      bust: 1,
  });

  const result3 = calculateLosses({
      chair: 3500,
  });

  const result4 = calculateLosses({});


  console.log(
  result1,
  result2,
  result3,
  result4)
}

console.groupEnd();