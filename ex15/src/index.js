function switchCase(letter) 
{
    var animal="";
    switch (letter) 
    {
        case "a":
           // console.log("antelope");
           animal="antilope";
            break;

            case "b":
                //console.log("bird");
                animal="bird";
                break;
            
                case "c":
                    //console.log("cat");
                    animal="cat";
                    break;
        default:
        animal="stuff";
        
    }
    return animal;
}
console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase("4"));

module.exports=switchCase;