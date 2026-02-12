// var random = Math.floor(Math.random() * 10)

// console.log(random);

// for (let i = 0; i < 5; i++) {

//     var num = +prompt("(Enter your number to guess)")
//     if (num == random) {
//         console.log("A secret number has been chosen! Try to guess it.");
//         break

//     }
//     else if (num >= random) {
//         console.log("too cold");
//     }
//     else if (num <= random) {
//         console.log("too hot");
//     }
//     else {console.log("Correct");
//         break
// }
// }
// ---------------------------------------------------------
// var UserEmail = prompt("Enter your email")
// var UserPass = prompt("Enter your password")
// var number_of_tries = 0
// var max_tries = 3


// while (UserEmail != "ebtesam@gmail" || UserPass != "W987654") {
//     number_of_tries++

//     if (number_of_tries < max_tries) {
//                 alert("Wrong data! Try again after 3 seconds")

//         UserEmail = prompt("Enter your email")
//         UserPass = prompt("Enter your password")
//     }
//     else {
//         alert("Tried many times")
//         break
//     }}

// ==========================================================================================

// var UserEmail = "ebtesam@gmail"
// var UserPass = "W987654"
// var number_of_tries = 0
// var loggedIN = false;

// while (UserEmail != "eee" || UserPass != "10") {
//     number_of_tries++
//     if (number_of_tries < 3) {
//         UserEmail = prompt("enter your Email")
//         UserPass = prompt("enter your Password")
//     }


//     else {
//         alert("Tiy tried too many time")
//         break
//     }

// }

// if (UserEmail == "ebtesam@gmail" && UserPass == "W987654") {
//     alert("Successfully logged in ")

// }

// var number_of_questions = +prompt("Please Enter Your Number Of Questions")
// var operators = ["+", "_", "*", "/"]
// var score = 0
// for (var i = 1; i <= number_of_questions; i++) {

//     var num1 = Math.floor(Math.random() * 10)
//     var num2 = Math.floor(Math.random() * 10)

//     var operation = operators[Math.floor(Math.random() * operators.length)]
//     var userAnswer = prompt('$(i). $(num1) $(operation} $(num2}=')
// }


// var correctAnswer;
// if (operation === "+") {
//     correctAnswer = num1 + num2;
// } else if (operation === "-") {
//     correctAnswer = num1 - num2;
// } else if (operation === "*") {
//     correctAnswer = num1 * num2;
// } else if (operation === "/") {
//     correctAnswer = Math.floor(num1 / num2);
// }
// if (parseInt(userAnswer) === correctAnswer) {
//     score++;
// }


//////////////////////////////////////// SMART SYSTEM ///////////////////////////////////////////////////////////

// var userEmail = prompt("enter Email")
// var userpass = prompt("enter password")
// var number_of_tries = 0
// while (userEmail != "ebtesam@gmail" || userpass != "50") {
//     number_of_tries++
//     if (number_of_tries < 3) {
//         userEmail = prompt("enter Email")
//         userpass = prompt("enter password")
//     }
//     else {
//         alert("you try too many times")
//         break
//     }
// }
// if (userEmail == "ebtesam@gmail" && userpass == "50") {
//     alert("successfully logged in")
//     var number_of_questions = +prompt("please enter number of questions:")
//     var Operators = ["+", "-", "*", "/", "**", "%"]
//     var score = 0

//     for (var i = 1; i <= number_of_questions; i++) {
//         var num1 = Math.floor(Math.random() * 10)
//         var num2 = Math.floor(Math.random() * 10)
//         var operation = Operators[Math.floor(Math.random() * Operators.length)]
//         var userAnswer = +prompt(`${i}) ${num1} ${operation} ${num2} =`);
//         var correctAnswer;



//         if (operation === "+") {
//             correctAnswer = num1 + num2;
//         } else if (operation === "-") {
//             correctAnswer = num1 - num2;
//         } else if (operation === "*") {
//             correctAnswer = num1 * num2;
//         } else if (operation === "**") {
//             correctAnswer = num1 ** num2;
//         } else if (operation === "/") {

//             correctAnswer = num1 / num2;
//         } else if (operation === "%") {
//             correctAnswer = num1 % num2;
//         }



//         if (userAnswer === correctAnswer) {
//             score++;
//         }

//     }

//     alert("Your total score is: " + score + " out of " + number_of_questions);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function cal(x1, y1) {
//     return x1 + y1;
// }

// var final_price = cal(10, 90);

// console.log(final_price);

///////////////////////////////////////////////////////////////////////

function cal(x1, y1, math) {
    var x1 = prompt("  Enter number 1");
    var y1 = prompt("  Enter number 2");
    var math = prompt("enter operation  (+, -, *, /):");
    var result;

    if (math == "+") {
        result= x1 + y1;
    }
    else if (math == "-") {
        result= x1 - y1;
    }
    else if (math == "*") {
        result= x1 * y1;
    }
    else if (math == "/") {
      
        result= x1 / y1;
    }
    return result
}


console.log("result : " + cal());


