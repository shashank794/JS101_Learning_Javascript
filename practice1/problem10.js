let arr=[1,2,3,4,5,1,2,3,4,6,7]
let obj={}
for(let i=0;i<arr.length;i++)
  {
    if(obj[arr[i]]==undefined)
    {
      obj[arr[i]]=1
    }
    else{
      obj[arr[i]]++
        }
  }
for(let y in obj)
  {
  if(obj[y]==1)
  {
    console.log(y)
  }
}
    