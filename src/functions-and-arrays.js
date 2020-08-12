// // // Progression #1: Greatest of the two numbers
var x=4;
var y=8;
greatestofTwonumbers(x,y);
function greatestofTwonumbers(a,b)
{
  if(a>b)
  {
    console.log("largest num " +a);
  }
  else
  {
    console.log("largest num " +b);
  }
}
// // // Progression #2: The lengthy word
// // const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
netprice(numbers);
function netprice(num)
{
  var sum=0;
  for(let i=0;i<num.length;i++)
  {
    sum=sum+num[i];
  }
  console.log("sum Net price is",+sum);
}
// // // Progression #3: Net Price


// // // Progression #4: Calculate the average
// // // Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
var cap;
cap=average(numbersAvg);
console.log("average is " +cap);
function average(a)
{
  var sum=0;
  var avg;
  for(let i=0;i<a.length;i++)
  {
    sum=sum+a[i];
    avg=sum/a.length;
  }
  return avg;
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
arrayofstrings(wordsArr);
function arrayofstrings(b)
{
  var sum=0;
  var avg=b.length;
  var out;
  for(i=0;i<b.length;i++)
  {
    sum=sum+b[i].length;
    out=sum/avg;
  }
  console.log("string array " +out);
}
//Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
uniquifyarray(wordsUnique);
function uniquifyarray(wordsUnique)
{
  var backup=[],k=0;
  for(let i=0;i<wordsUnique.length;i++)
  {
    // console.log(wordsUnique[i]);
    for(let j=i+1;j<wordsUnique.length;j++)
      {
        if(wordsUnique[i]!=wordsUnique[j])
        {
          // console.log(wordsUnique[i]);
          //console.log("Comparing "+wordsUnique[i]+" with "+wordsUnique[j]);
          backup[k]=wordsUnique[i];
        }
      }
      k=k+1;
  }
  console.log(backup);
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
var result=searchElement("machine");
console.log("Element match:"+result);
function searchElement(search)
{
  var flag=false;
  for(let i=0;i<wordsFind.length;i++)
  {
    if(wordsFind[i]==search)
    {
      flag=true;
      break;
    }
  }
  return flag;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
howManytimesElementrepeat(wordsCount);
function howManytimesElementrepeat(wordsCount)
{
  var count=0,ret;
  for(let i=0;i<wordsCount.length;i++)
  {
    for(let j=i+1;j<wordsCount.length;j++)
    {
      //  console.log("Comparing "+wordsCount[i]+" with "+wordsCount[j]);
      if(wordsCount[i]==wordsCount[j])
      {
        count=count+1
      }
    }
    if(count==0)
    {
      ret=0;
    }
    else if(count==1)
    {
      ret=1;
    }
    else
    {
      ret=count;
    }
    console.log(wordsCount[i]+" repeated "+ret)
  }
}


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
