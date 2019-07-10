'use strict'

//VARIABLE STORAGE

var i = 0;
var x = true;
var yay = 0;
var escape = false;
var favPok = ['gengar', 'chansey', 'scyther', 'zapados', 'squirtle'];


//QUESTION 1

var answerState = prompt('Do I like rasberries?');

if (answerState.toLowerCase() === 'yes' || answerState.toLowerCase() === 'y') {
    alert('You got it! They are one of my favorite fruits!');
} else {
    alert('Sorry, wrong answer');
}

console.log('Does Peter like rasberries?:' + answerState);

//QUESTION 2

var answerCar = prompt('Am I scared of spiders?');

if (answerCar.toLowerCase() === 'yes' || answerCar.toLowerCase() === 'y') {
    alert('Wrong! spiders don\'t scare me at all!');
} else {
    alert('Correct!')
}

console.log('Is Peter scared of spiders? ' + answerCar);

//QUESTION 3

var middleName = prompt('Have I seen Avengers Endgame?');

if (middleName.toLowerCase() === 'yes' || middleName.toLowerCase() === 'y') {
    alert('Absolutely! It wasn\'t as good as Infinity War though.');
} else {
    alert('Of course I\'ve seen it! Come on I\'m a huge geek');
}

console.log('Has Peter seen Infinity War? ' + middleName);

//QUESTION 4

var favMov = prompt('Have I ever traveled outside of the USA?');

if (favMov.toLowerCase() === 'yes' || favMov.toLowerCase() === 'y') {
    alert('Correct! I have been to Canada, Mexico, Nicaragua, Finland, Vietnam, and Cambodia!');
} else {
    alert('Wrong! I love traveling!');
}

console.log('Has Peter user traveled abroad? ' + favMov);

//QUESTION 5

var worFear = prompt('Do I like turtles?');

if (worFear.toLowerCase() === 'yes' || worFear.toLowerCase() === 'y') {
    alert("Duhhhhh....");
} else {
    alert('That\'s messed up dude, of course I like turtles');
}

console.log('Does the Peter like turtles? ' + worFear);

//QUESTION 6

while (i < 4 && x === true) {

    var favNum = prompt('What is my favorite number?');

    if (Number(favNum) === 7) {
        alert('Correct! Thats my favorite number!');
        x = false;
        //break;
    }
    else if (favNum > 7) {
        alert('Good try! The number is lower than that! You have used ' + (i + 1) + ' of your 4 tries!')
    }
    else if (favNum < 7) {
        alert('Good try! The number is higher than that! You have used ' + (i + 1) + ' of your 4 tries!')
    }
    console.log('my fav num is' + favNum + ' x is ' + x)
    i++;
}

//QUESTION 7 - HELL QUESTION

    while (yay < 6 && escape === false) {

        console.log('Im in the while loop');

        var guessUser = prompt('Can you guess one of my favorite Pokemon?');

        for (var i = 0; i < favPok.length; i++) {

            console.log('Im in the for loop');

            if (favPok[i] === guessUser) {

                alert('Congrats!');

                escape = true;

                console.log('Made it to the if');

                break;
            }

        } if (escape === false) {
            alert('Good try! You have used ' + (yay + 1) + ' of your 6 tries!')
        }

        yay++;
    }


