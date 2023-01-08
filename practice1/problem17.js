let object={
  name:"shashank",
  age:23,
  licence:true,
  city:"lucknow",
}
console.log(object);
object.hobbies="cricket";//using dot notation
console.log(object);
object["father_name"]="pradeep";
console.log(object);
object.age=25
console.log(object);
object["age"]=24
console.log(object);

delete object.age //delete object with dot notation
console.log(object);

delete object["name"] //delete object with bracket                             notation
console.log(object)