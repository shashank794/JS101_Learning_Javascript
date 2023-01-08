//Given a string count the number of words in that string

let arr="i am lazy";
let count=0;
for(let i=0;i<=arr.length;i++)
  {
    if (arr[i] ==" ")
    {
      count++;
    }
  }
console.log("words in a strring are:",count+1);