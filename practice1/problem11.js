let arr=[1,2,1,2,1,2,3,4,3,4,5,6,];
let obj={}
for(let i=0;i<arr.length;i++)
  {
    if(obj[arr[i]]==undefined)
    {
      obj[arr[i]]=1;
    }
    obj[arr[i]]++
  }
let sum=0;
console.log(obj)
for(let y in obj)
  {
    if(obj[y]>=2)
    {
      sum=sum+Number(y);
    }
  }
console.log(sum);