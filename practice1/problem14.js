let flipkart=[
  {name:"luffy",age:23,location:"jharkhand"},
  {name:"goku",age:26,location:"bihar"},
  {name:"sonia",age:32,location:"pune"},
]
let querry= "luffy";
for(let i=0;i<3;i++)
  {
    if(flipkart[i].name==querry)
    {
      console.log(flipkart[i]);
    }
  }