let string="naman";
let bag="";
for(let i=0;i<=string.length-1;i++)
  {
    bag=bag+string[i];
    if(i==2)
    {
      break;
    }
  }
console.log(bag);