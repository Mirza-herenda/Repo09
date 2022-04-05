function comparisonToEqual(a) 
{
    if(a<5)
    return console.log("less than 5");

    if(a<10)
    return console.log("less than 10");

    if(a>10 && a<20)
    return console.log("10 or over");

    if(a>20)
    return console.log("More than 20"); 

   

   
}
comparisonToEqual(0);
comparisonToEqual(5);
comparisonToEqual(17);
comparisonToEqual(21);



module.exports=comparisonToEqual;