function myEqualFunction(num) 
{
 if(num===23)
 return console.log("Equal");

 return console.log("Not Equal");
}
myEqualFunction(5);
myEqualFunction(23);
myEqualFunction("23");
myEqualFunction('23');
myEqualFunction("text");

module.exports=myEqualFunction;