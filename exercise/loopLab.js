//Print every number from 0 to 10

function hundred (){
    for(let i = 0 ; i<=10 ; i++){
    console.log("the number is " + i ) ; 
    } 
}

//Print every number from 10 to 0

function ten (){
 for( let i = 10 ; i >= 0 ; i--){
	 console.log("the number is " + i ) ; 
	}
}

//Print every number from 4 to -16

function four(){
    for(let i = 4 ; i <= 16 ; i+=2){
    	console.log("the number is " + i ) ; 
    }
}

//Print every fifth number from 8 to 41

function fifth(){
    for(let i = 8 ; i <= 41 ; i+=5){
    	console.log("the number is " + i ) ; 
    }
}

//The classic Fizzbuzz Program
function fizzBuzz(){
    for (let i = 0 ; i <= 100 ; i++ ) {
    if( i % 3 === 0 && i % 5 === 0 ) {
        console.log ( i + "is Fizzbuzz" );
    }else if(i % 3 === 0){
        console.log ( i + "is Fizz" );
    }else if( i % 5 === 0 ) {
        console.log ( i + "is Buzz" );
    }else {
        console.log (i)  ; 
        }
    }//end for loop
}

//Another solution for fizzBuzz
for (let i = 1 ; i; i++){
    let string =" ";
    if(i % 3 === 0 && i % 5 === 0 ){
        string += i ; 
        string +="Fizzbuzz";
    }else if(i % 3 === 0){
        string += i ; 
        string +="Fizz";
    }else if( i % 5 === 0 ){
        string += i ; 
        string +="Buzz";
    }
    if(string !==" "){
        console.log(string ); 
    }
}

/*The even/odd reporter
Write a for loop that will iterate from 0 to 20. For each iteration, 
it will check if the current number is even or odd, and report that to 
the screen (e.g. "2 is even").
*/
function oddEven(){
    for (let i = 0 ; i <=20 ; i++ ) {

        if( i %2 === 0 ){
            console.log(i + " is even ") ; 
        }else {
            console.log(i + " is odd " ); 
        }
    }
}

/*Multiplication Tables

Write a for loop that will iterate from 0 to 10. 
For each iteration of the for loop, it will multiply the number 
by 9 and log the result (e.g. "2 * 9 = 18").
*/
function multiTable (){
    for ( let i = 0 ; i <= 10 ; i+=1){
    let result = i * 9 ;
    console.log( i +" * 9 = " + result ) ;  
    }
}

/*
Bonus: Use a nested for loop to show the tables for 
every multiplier from 1 to 10 (100 results total).
*/
function multiTable (){
    for ( let i = 0 ; i <= 10 ; i+=1){
   		for( let j = 1 ; j <= i ; j++ ) {
			let result = i * j;
			console.log( i +" * "+ j +" = " + result ) ;  
        }
    }
}

/*The Grade Assigner
Check the results of assignGrade function from the conditionals 
exercise for every value from 60 to 100 - so your log should show 
"For 89, you got a B. For 90, you got an A.", etc.
*/
function grade (){
for (let i = 60 ; i <= 100 ; i +=5){
if( i == 60 || i <=64){
	console.log( i + " You got D ") ;
}else if( i == 65 || i <=69 ){
	console.log( i + " You got D+ ") ;
}else if (i == 70 || i <=74 ) {
	console.log( i + " You got C ") ;
}else if ( i == 75 || i <=79 ){
	console.log( i + " You got C+") ;
}else if(i == 80 || i <=84 ) {
	console.log( i + " You got B") ;
}else if(  i == 85 || i <=89) {
	console.log( i + " You got B+"); 
}else if( i == 90 || i <= 94){
	console.log( i + " You got A");
}else if(  i == 95 || i <=100){
	console.log( i + " You got A+");
}else {
	console.log("Sorry !! you did n't pass ");
    }
}//end for loop
}