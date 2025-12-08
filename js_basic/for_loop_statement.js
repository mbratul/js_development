/* 
    loop statement describe here
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
    https://www.geeksforgeeks.org/javascript-control-flow-statements/
    https://javascript.info/while-for
 */
/*
    for (begin; condition; step) {
        // ... loop body ...
    }
 */
let i = 1;
for(i = 1; i <= 10; i++){
    console.log(i);
    
}
for(i = 1; i<100; i++){
    if (i % 5 == 0) {
        console.log(i);
        
    }
}

for(i = 1; i <= 10; i++ ){
    console.log("hello world" + " " + i);
    
}
/* += means i = i + 2 == increment the for loop value for 2 times  */
for(i = 1; i <= 10; i += 2 ){
    console.log(i);
    
}
for(i = 10; i > 0; i -- ){
    console.log(i);
    
}
for(i = 1; i <= 100; i++ ){
    if(i % 7 == 0){
        console.log(i);
    }
}
for(i = 1; i <= 20; i++ ){
    if(i % 2 == 1){
        console.log("Odd " + i);
    }else if (i % 2 == 0){
        console.log("Even " + i);
        
    }
}
