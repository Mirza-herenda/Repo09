function logicalAndOperator(num) 
{
    if(num >= 40 && num <=80)
    return console.log("Yes");

    return console.log("No");
    
}
logicalAndOperator(0);
logicalAndOperator(24);
logicalAndOperator(45);
logicalAndOperator(57);
logicalAndOperator(100);

module.exports=logicalAndOperator;
