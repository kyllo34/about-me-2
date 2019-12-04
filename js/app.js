'use strict';

console.log('about me');

var userName = prompt('tell me your name!');
console.log('user\'s name was' + userName);

var lowerCaseUsername = userName.toLowerCase();
if(lowerCaseUsername === 'susana') {
  alert('welcome back, you beautiful' + userName);
} else {
  alert('Welcome to my site');
}

var userLikeSite = prompt('do you like my site?'); 
var LowerCaseUserLikeSite = userLikeSite.toLowerCase();
if (LowerCaseUserLikeSite === 'no') {
  alert(' maybe next time ');
} else {
  alert('thank you');
  console.log('user like me site');
}

var userLikeDogs = prompt('do you like dogs?');
var LowerCaseUserLikeDogs = userLikeDogs.toLowerCase();
if (LowerCaseUserLikeDogs === 'no') {
  alert ('oh no');
}else {
  alert('me too');
  console.log('user like dogs');
}

var userLikeTravel = prompt('do you like to travel?');
var LowerCaseUserLikeTravel = userLikeTravel.toLowerCase();
if(LowerCaseUserLikeTravel === 'no') {
  alert('you will love it');
}else {
  alert('I love to travel too and cant wait for the next adventure');
  console.log(' user like to travel');
}

var userLiveSeattle = prompt ('do you live in Seattle?');
var LowerCaseUserLiveSeattle = userLiveSeattle.toLowerCase();
if (LowerCaseUserLiveSeattle === 'no') {
  alert('you should come and visit Seattle, its a lot of cool stuff to do');
}else{
  alert('I love Seattle, even the rain');
  console.log('user lives in Seattle');
}


alert ('thank you for visited my site, ' + userName + 'Have a wonderful day');


