function functionElse(num) 
{
    if(num<=5)
    return console.log("5 or smaller");
    else
    return console.log("Bigger than 5");
}

functionElse(4);
functionElse(5);
functionElse(6);
functionElse(10);

module.exports=functionElse;

