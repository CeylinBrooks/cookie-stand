'use strict'

var seattle = {
  name: 'seattle',
  cookies: 0,
  getCookies: function (){
  
  this.hours = randomCookies () + 'cookies';
  console.log(this.cookies);
 }
};

seattle.getCookies();

console.log(seattle);
function randomCookies (min,max){
  return Math.floor(Math.random() * (max-min + 1) + min);
}