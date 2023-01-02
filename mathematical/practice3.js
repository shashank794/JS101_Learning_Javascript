//Given 3 numbers (all different values), print which is greatest
let a=5;
let b=4;
let c=6;
if((a>b)&&(a>c))
{
  console.log("greater no is",a);
}
else if((b>a)&&(b>c))
{
  console.log("greater no is",b);
}
else if((c>a)&&(c>b))
{
  console.log("greater no is",c)
}
else{
  console.log("all no is equal");
}