'use strict'

//question1
// function questionOne() {
//     var answerState = prompt('Do I like rasberries?');

//     if (answerState.toLowerCase() === 'yes' || answerState.toLowerCase() === 'y') {
//         alert('You got it! They are one of my favorite fruits!');
//     } else {
//         alert('Sorry, wrong answer');
//     }

//     console.log('Does Peter like rasberries?:' + answerState);

//     var answerCar = prompt('Am I scared of spiders?');

//     if (answerCar.toLowerCase() === 'yes' || answerCar.toLowerCase() === 'y') {
//         alert('Wrong! spiders don\'t scare me at all!');
//     } else {
//         alert('Correct!')
//     }
    
//     console.log('Is Peter scared of spiders? ' + answerCar);

//     var middleName = prompt('Have I seen Avengers Endgame?');

//     if (middleName.toLowerCase() === 'yes' || middleName.toLowerCase() === 'y') {
//         alert('Absolutely! It wasn\'t as good as Infinity War though.' );
//     } else {
//         alert('Of course I\'ve seen it! Come on I\'m a huge geek');
//     }

//     console.log('Has Peter seen Infinity War? ' + middleName);

//     var favMov = prompt('Have I ever traveled outside of the USA?');

//     if (favMov.toLowerCase() === 'yes' || favMov.toLowerCase() === 'y') {
//         alert('Correct! I have been to Canada, Mexico, Nicaragua, Finland, Vietnam, and Cambodia!');
//     } else {
//         alert('Wrong! I love traveling!');
//     }

//     console.log('Has Peter user traveled abroad? ' + favMov);

//     var worFear = prompt('Do I like turtles?');

//     if (worFear.toLowerCase() === 'yes' || worFear.toLowerCase() === 'y') {
//         alert("Duhhhhh....");
//     } else {
//         alert('That\'s messed up dude, of course I like turtles');
//     }

//     console.log('Does the Peter like turtles? ' + worFear);

var i = 0;
var x = true;
while(i < 4 && x === true){

    var favNum = prompt('What is my favorite number?');

    if (Number(favNum) === 7){
        alert('Correct! Thats my favorite number!');
        x = false;
        //break;
    }
    else if (favNum > 7)
       {
        alert('Good try! The number is lower than that! You have used ' + (i+1) + ' of your 4 tries!')
    }
    else if (favNum < 7) {
        alert('Good try! The number is higher than that! You have used ' + (i+1) + ' of your 4 tries!')
    }
console.log('my fav num is' +favNum+ ' x is '+ x)
    i++;     
}

