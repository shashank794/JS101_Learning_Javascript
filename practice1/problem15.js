let student= ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let age=[32, 30, 26, 28, 44]


//stored data
// [
// 	{name: "Nrupul", age: 32},
// 	{name: "Prateek" , age: 30},
// 	{name: "Aman" , age: 26},
// 	{name: "Albert" , age: 28},
// 	{name: "Yogesh" , age: 44},
// ]

let result=[]
for(let i=0;i<student.length;i++)
  {
    let obj={}
    obj.name=student[i];
    obj.age=age[i];
    result.push(obj)
  }
console.log(result);
for(let i=0;i<result.length;i++)
  {
    if(result[i].age>30)
    {
      console.log(result[i].name);
    }
  }



  
