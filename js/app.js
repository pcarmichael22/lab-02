'use strict'

//question1
function questionOne() {
    var answerState = prompt('Do I like rasberries?');

    if (answerState.toLowerCase() === 'yes' || answerState.toLowerCase() === 'y') {
        alert('You got it! They are one of my favorite fruits!');
    } else {
        alert('Sorry, wrong answer');
    }

    console.log('Does Peter like rasberries?:' + answerState);

}

//question2
function questionTwo() {
    var answerCar = prompt('Am I scared of spiders?');

    if (answerCar.toLowerCase() === 'yes' || answerCar.toLowerCase() === 'y') {
        alert('Wrong! spiders don\'t scare me at all!');
    } else {
        alert('Correct!')
    }
    
    console.log('Is Peter scared of spiders? ' + answerCar);

}

//question3
function questionThree() {
    var middleName = prompt('Have I seen Avengers Endgame?');

    if (middleName.toLowerCase() === 'yes' || middleName.toLowerCase() === 'y') {
        alert('Absolutely! It wasn\'t as good as Infinity War though.' );
    } else {
        alert('Of course I\'ve seen it! Come on I\'m a huge geek');
    }

    console.log('Has Peter seen Infinity War? ' + middleName);

}

//question4
function questionFour() {
    var favMov = prompt('Have I ever traveled outside of the USA?');

    if (favMov.toLowerCase() === 'yes' || favMov.toLowerCase() === 'y') {
        alert('Correct! I have been to Canada, Mexico, Nicaragua, Finland, Vietnam, and Cambodia!');
    } else {
        alert('Wrong! I love traveling!');
    }

    console.log('Has Peter user traveled abroad? ' + favMov);

}

//question5
function questionFive() {
    var worFear = prompt('Do I like turtles?');

    if (worFear.toLowerCase() === 'yes' || worFear.toLowerCase() === 'y') {
        alert("Duhhhhh....");
    } else {
        alert('That\'s messed up dude, of course I like turtles');
    }

    console.log('Does the Peter like turtles? ' + worFear);

}
