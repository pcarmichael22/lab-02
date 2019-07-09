'use strict'

function questionOne(){
var answerState = prompt('Do you like rasberry flavored anything?');
if(answerState.toLowerCase() === 'yes' || answerState.toLowerCase() === 'y'){
    alert ('Thats awesome! Me too! Did you know that rasberry flavoring includes a natural ingredient called castoreum? Castoreum happens to come from beaver secretions? GROSS');
} else {
    alert ('You are lucky! try the question again and type yes to find out why!');
}
console.log ('Does the user like rasberry flavoring:' + answerState);
}

function questionTwo(){
var answerCar = prompt('Are you scared of spiders?');
if(answerCar.toLowerCase() === 'yes' || answerCar.toLowerCase() === 'y'){
    alert ('Dont worry! Spiders are our friends!');
} else {
    alert ('Good for you for being so courageous!')
}
console.log ('Is the user scared of spiders? ' + answerCar);
}

function questionThree(){
var middleName = prompt('Have you seen Infinity War?');
if (middleName.toLowerCase() === 'yes' || middleName.toLowerCase() === 'y'){
    alert ("Excellent!");
} else {
    alert ('Thanos wins at the end');
}
console.log ('Has the user seen Infinity War? ' + middleName);
}

function questionFour(){
var favMov = prompt('Have you ever traveled outside of the USA?');
if (favMov.toLowerCase() === 'Yes' || favMov.toLowerCase() === 'y'){
    alert ('How cool! I love travelling to other places!');
} else {
    alert ('Hopefully someday you will! its great to see other cultures!');
}
console.log ('Has the user traveled abroad? ' + favMov);
}

function questionFive(){
var worFear = prompt('Do you like turtles?');
if (worFear.toLowerCase() === 'yes' || worFear.toLowerCase() === 'y'){
    alert ("I like turtles too");
} else {
    alert ('That\'s messed up dude');
}
console.log ('Does the user like turtles? ' + worFear);
}
