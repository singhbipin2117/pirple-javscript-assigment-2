/**
* 
* Javascript ES6 variables explanation(let const and var).
* 
* Hoisting in javascript
* As we initialize variable like var randomNumber = 3;
* When javscript compiler ru this statement It first declare the variable and then assign the value to variable.
* javascript compiler first run it as - 
* var randomNumber;
* Then
* randomumber = 3;
* 
*/

/**
 * 
 * variable let explanaion
 * 
 * let is jacasript es6 variable type implimentaion. 
 * It has block level scoping.
 * If a variable is declared with let keyword it can be accessed witin that blcok only.
 * 
 */

 function playSong() {
    let isPlaySong = true;
    if ( isPlaySong ) {
        // isPlaySong variable is accesibe within if block as it's define to functional scope.
        console.log("Is play song" + " " + isPlaySong);
 }
}
  
 console.log(playSong());
 console.elog(isPlaySong) // This line gives error as isPlaySng variable is notattches to global scope



/**
 *
 * variable const explanaion
 *
 * const is jacasript es6 variable type implimentaion.
 * We can not change the value of const variable.
 * If a variable is declared with const keyword it can be accessed witin that blcok only.
 *
 */

const myName= "My name is Bipin";
console.log(myName); // It prints My name is Bipin.

myName = " My name is Rahul" // This line gives error as we are trying to change const variable value


/**
 * 
 * variable let explanaion
 * 
 * let is jacasript es6 variable type implimentaion. 
 * It has block level scoping.
 * If a variable is declared with let keyword it can be accessed witin that blcok only.
 * 
 */

 var MyName = "Bipin";
function name() {
    if (MyName) {
        // MyName variable is accesibe within if block as even it is define to global scope. Thi console print print My name is Bipin
        console.log("My name is" + " " + MyName);
    }

    if (MyName) {
        var myName = "Rahul"
        // This console print My name is Rahul as we updated the myName variable value
        console.log("My name is" + " " + MyName); 
    }

    if (MyName) {
        myName = "Ravi"
        // This console print My name is Ravi as we updated the myName variable value
        console.log("My name is" + " " + MyName);
    }


    /* This console print My name is Rahul.Whe we are defining variable with var keyword.
     It is declared first and then valueis assigned to it. */ 
    console.log("My name is" + " " + MyName);

    
}

console.log(name());
/**
 * 
 * It firt print
 * My name is Bipin
 * My name is Rahul
 * My name is Rahul
 * 
 */
