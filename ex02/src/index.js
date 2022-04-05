
function myFunction(myParameter) 
{
    if(myParameter==true)
    {
        return console.log("The parametar is true!");
    }
    return console.log("The parametar is false!"); 
}

myFunction(true);
myFunction(false);

module.exports=myFunction;