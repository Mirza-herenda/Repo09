
function logicOrder(num) 
{
    if(num <50){
         return "less tha 50";
    }
    else if(num<100)
    {
         return "les than 100";
    }
    else
    {
        return"Greater than or equal to 100";
    }
    
}

console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));
module.exports=logicOrder();
