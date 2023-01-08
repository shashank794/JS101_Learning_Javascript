let object={
  name:"goku",
  age:46,
  location:"Deoghar",
  phone: 938339393,
};
console.log(object);

object.location="jharkhand"
console.log(object);
object.mother="sarita";
console.log(object);
object["licence"]= "yes";
console.log(object)
delete object.name
console.log(object.age);
object.name="shashank";
console.log(object);
object["name"]="sourav";
console.log(object);
object.name="shashank";
console.log(object);
delete object.age
  console.log(object);