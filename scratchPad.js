// var myArray = /d(b+)d/g.exec("cdbbdbsbz");

// console.log(myArray);

  var expectedAnswer = "Sum(Calories ab)";
  var expectedAggr = /\bsum\b/gi;
  
  var result = expectedAnswer.match(expectedAggr);
  var outputSum = result[0];
  outputSum = outputSum.toUpperCase();
  //console.log(test);
  console.log(outputSum);