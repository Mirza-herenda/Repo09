
function isLess(a,b) 
{
  if(a<b)
  {
      return console.log(true);
  }  
  else{
      return console.log(false);
  }
}
isLess(10,15);
isLess(15,10);
module.exports=isLess;