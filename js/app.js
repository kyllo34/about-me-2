'use strict';
var score = 0;
console.log('about me');
function greetingName() {
  var userName = prompt('tell me your name!');
  console.log('user\'s name was' + userName);
  var lowerCaseUsername = userName.toLowerCase();
  if(lowerCaseUsername === 'susana') {
    alert('welcome back' + userName);
  } else {
    alert('Welcome to my site');
  }
}
function siteQuiz() {
  var userLikeSite = prompt('do you like my site?');
  var lowerCaseUserLikeSite = userLikeSite.toLowerCase();
  if (lowerCaseUserLikeSite === 'no') {
    alert(' Im sad, oh well ');
  } else {
    alert('thank you');
    console.log('user like me site');
  }
}
function dogQuiz() {
  var userLikeDogs = prompt('do you like dogs?');
  var lowerCaseUserLikeDogs = userLikeDogs.toLowerCase();
  if (lowerCaseUserLikeDogs === 'no') {
    alert ('oh no');
  }else {
    alert('me too');
    console.log('user like dogs');
  }
}
function travelQuiz() {
  var userLikeTravel = prompt('do you like to travel?');
  var lowerCaseUserLikeTravel = userLikeTravel.toLowerCase();
  if(lowerCaseUserLikeTravel === 'no') {
    alert('you should give it a try');
  }else {
    alert('I love to travel too and I cant wait for the next adventure');
    console.log(' user like to travel');
  }
}
function seattleQuiz() {
  var userLiveSeattle = prompt ('do you live in Seattle?');
  var lowerCaseUserLiveSeattle = userLiveSeattle.toLowerCase();
  if (lowerCaseUserLiveSeattle === 'no') {
    alert('you should come and visit Seattle, its a lot of cool stuff to do');
  }else{
    alert('I love Seattle, even the rain');
    console.log('user lives in Seattle');
  }
}

alert ('thank you for visited my site , ' + userName + 'Have a wonderful day');


//help from Andrew
function ageQuiz() {
  var ageGuess = prompt('how old do you think I am?');

  var ageAnswer = Math.ceil (Math.random() * 39);
  for (var i = 0; i <4; i++) {
    if (ageGuess < ageAnswer) {
      ageGuess = prompt('too high');
    }
    else if (ageGuess > ageAnswer) {
      ageAnswer = prompt('too low');
    } else {
      alert ('correct');
      score++;
      i=4;
    }
  }
}
greetingName();
siteQuiz();
dogQuiz();
travelQuiz();
seattleQuiz();
ageQuiz();











    