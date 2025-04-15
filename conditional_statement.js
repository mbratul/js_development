// let i = 0;
// for(i = 0; i < 10; i++){
//     console.log(i);    
// }
if(5){
    console.log("hello world");
    
}
let num1 = 10;
let num2 = 15;
/* == if condition display any kind of truth value ==== */
if(num1 > num2 && true){
    console.log("it is a bigger number");
    
}else{
    console.log("it's a small number");
    
}

if(num1 < num2 && true){
    console.log("it is a bigger number");
    
}else{
    console.log("it's a small number");
    
}

let person = "Sakib";
/* ==== if else statement==== */
if(person == "Sakib"){
    console.log("Number one All rounder");    

}else if(person == "Tamim"){
    console.log("best batsman");    

}else if(person == "Mashrafe"){
    console.log("Best Captain");
    
}else{
    console.log("please enter a valid name");
    
}

/* ==== switch cse statement ===== */
switch (person) {
    case 'Sakib':
        console.log("Number one all rounder");        
        break;

    case "Tamim":
        console.log("best batsman");        

    default:
        console.log("please enter a valid name");
        
}

/* == show the current day ===== */
switch (new Date().getDay()) {
    case 0:
        console.log("Sunday");        
        break;

    case 1:
        console.log("Monday");        
        break;

    case 2:
        console.log("Tuesday");        
        break;

    case 3:
        console.log("Wednesday");        
        break;

    case 4:
        console.log("Thursday");        
        break;

    case 5:
        console.log("Friday");        
        break;

    case 6:
        console.log("Saturday");        
        break;
            
}