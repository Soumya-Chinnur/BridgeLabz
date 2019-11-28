let take = require("../primeRange2D/primeRangeBL")
var start = 0;
var end = 100;
var primeArray = new Array(10);
for(let i = 0; i<10; i++)
{
  primeArray[i] = take.primeRange(start, end);
  start = start+100;
  end = end+100;
}
start = 0;
end = 100;
//print two dimestart array
for(let i = 0;i<10; i++)
{
  console.log("["+start+","+end+"] : "+primeArray[i]);
  start = start+100;
  end = end+100;
}
