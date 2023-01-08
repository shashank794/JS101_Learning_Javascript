let arr=[1,2,3,4,1,2,3,4,5,6,7]
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
for(let y in obj)
  {
    if(obj[y]%2==1)
    {
      delete obj[y];
    }
    
  }
  console.log(sum);