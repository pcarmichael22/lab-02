'use strict'

//FUNCTION CALL FOR BUTTON
// function questionOne(){

//VARIABLE STORAGE

var yay = 0;
var escape = false;
var favPok = ['gengar', 'chansey ', 'scyther', 'zapados', 'squirtle'];

var qAsk = ['Do I like rasberries?','Am I scared of spiders?','Have I seen Avengers: Endgame','Have I travelled outside the USA','Do I like turtles?'];
var correctAnswer = ['yes', 'no','no','yes','yes','no','yes','no','yes','no'];
var response = ['You got it! They are one of my favorite fruits!','Sorry, wrong answer','Correct!','Wrong! spiders don\'t scare me at all!','Absolutely! It wasn\'t as good as Infinity War though.','Of course I\'ve seen it! Come on I\'m a huge geek','Correct! I have been to Canada, Mexico, Nicaragua, Finland, Vietnam, and Cambodia!','Wrong! I love traveling!','Duhhhhh....','That\'s messed up dude, of course I like turtles'];

//If there's an unnacceptable answer, ask question again
var qBoo = false;

//number of correct answers
var total = 0;

    //loop running questions 1-5
    for(var i=0; i < qAsk.length; i++) {
        var forAns = prompt(qAsk[i]).toLowerCase();
        console.log(i, forAns,);
        if(qBoo === false) {
            if(forAns === correctAnswer[i*2]) {
                alert(response[i*2]);
                qBoo = true;
                total++;
                console.log(forAns, correctAnswer, response, i, total);
            } else if(forAns === correctAnswer[(i*2)+1]) {
                alert(response[(i*2)+1]);
                qBoo = true;
                console.log(response, correctAnswer, i, forAns);
            } else {
                alert('It seems that you did not put in an acceptable answer. Please only type yes or no');
                qBoo = true;
                i--;
                console.log(response, i);
            }
        }
        qBoo = false;
    }

    //QUESTION 6
    while (yay < 4 && escape === false) {

        var favNum = prompt('What is my favorite number?');

        if (Number(favNum) === 7) {
            alert('Correct! Thats my favorite number!');
            escape = true;
            //break;
        }
        else if (favNum > 7) {
            alert('Good try! The number is lower than that! You have used ' + (yay + 1) + ' of your 4 tries!');
            yay++;
        }
        else if (favNum < 7) {
            alert('Good try! The number is higher than that! You have used ' + (yay + 1) + ' of your 4 tries!');
            yay++;
        }
        else {
            alert('That was not a valid response. Please lime your number to answers You have used ' + yay + ' of your 4 tries!');
        }
        console.log('my fav num is' + favNum + ' escape is ' + escape);
    }

    yay = 0;
    escape = false;

    //QUESTION 7 - HELL QUESTION
    while (yay < 6 && escape === false) {

        console.log('Im in the while loop');

        var guessUser = prompt('Can you guess one of my favorite Pokemon?');

        for (var i = 0; i < favPok.length; i++) {

            console.log('Im in the for loop');

            if (favPok[i].toLowerCase() === guessUser) {

                alert('Congrats!');

                escape = true;

                console.log('Made it to the if');

                break;
            }

        } if (escape === false && yay === 5) {
            alert('You tried so hard! Unfortunately you aren\'t a Pokemon master yet! My favorite Pokemon are ' + favPok + ' . Thanks for playing!')
            break;
        }
    
        if (escape === false) {
            alert('Good try! You have used ' + (yay + 1) + ' of your 6 tries!')
        }

        yay++;
    }


// //QUESTION 1

// var answerState = prompt('Do I like rasberries?');

// if (answerState.toLowerCase() === 'yes' || answerState.toLowerCase() === 'y') {
//     alert('You got it! They are one of my favorite fruits!');
// } else {
//     alert('Sorry, wrong answer');
// }

// console.log('Does Peter like rasberries?:' + answerState);

// //QUESTION 2

// var answerCar = prompt('Am I scared of spiders?');

// if (answerCar.toLowerCase() === 'yes' || answerCar.toLowerCase() === 'y') {
//     alert('Wrong! spiders don\'t scare me at all!');
// } else {
//     alert('Correct!')
// }

// console.log('Is Peter scared of spiders? ' + answerCar);

// //QUESTION 3

// var middleName = prompt('Have I seen Avengers Endgame?');

// if (middleName.toLowerCase() === 'yes' || middleName.toLowerCase() === 'y') {
//     alert('Absolutely! It wasn\'t as good as Infinity War though.');
// } else {
//     alert('Of course I\'ve seen it! Come on I\'m a huge geek');
// }

// console.log('Has Peter seen Infinity War? ' + middleName);

// //QUESTION 4

// var favMov = prompt('Have I ever traveled outside of the USA?');

// if (favMov.toLowerCase() === 'yes' || favMov.toLowerCase() === 'y') {
//     alert('Correct! I have been to Canada, Mexico, Nicaragua, Finland, Vietnam, and Cambodia!');
// } else {
//     alert('Wrong! I love traveling!');
// }

// console.log('Has Peter user traveled abroad? ' + favMov);

// //QUESTION 5

// var worFear = prompt('Do I like turtles?');

// if (worFear.toLowerCase() === 'yes' || worFear.toLowerCase() === 'y') {
//     alert('Duhhhhh....');
// } else {
//     alert('That\'s messed up dude, of course I like turtles');
// }

// console.log('Does the Peter like turtles? ' + worFear);

// //QUESTION 6

// while (i < 4 && x === true) {

//     var favNum = prompt('What is my favorite number?');

//     if (Number(favNum) === 7) {
//         alert('Correct! Thats my favorite number!');
//         x = false;
//         //break;
//     }
//     else if (favNum > 7) {
//         alert('Good try! The number is lower than that! You have used ' + (i + 1) + ' of your 4 tries!')
//     }
//     else if (favNum < 7) {
//         alert('Good try! The number is higher than that! You have used ' + (i + 1) + ' of your 4 tries!')
//     }
//     console.log('my fav num is' + favNum + ' x is ' + x)
//     i++;
// }

// //QUESTION 7 - HELL QUESTION

//     while (yay < 6 && escape === false) {

//         console.log('Im in the while loop');

//         var guessUser = prompt('Can you guess one of my favorite Pokemon?');

//         for (var i = 0; i < favPok.length; i++) {

//             console.log('Im in the for loop');

//             if (favPok[i].toLowerCase() === guessUser) {

//                 alert('Congrats!');

//                 escape = true;

//                 console.log('Made it to the if');

//                 break;
//             }

//         } if (escape === false && yay === 5) {
//             alert('You tried so hard! Unfortunately you aren\'t a Pokemon master yet! My favorite Pokemon are ' + favPok + ' . Thanks for playing!')
//             break;
//         }
    
//         if (escape === false) {
//             alert('Good try! You have used ' + (yay + 1) + ' of your 6 tries!')
//         }

//         yay++;
//     }

// }
