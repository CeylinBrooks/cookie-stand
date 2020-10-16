'use strict'

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var seattle = {
  name: 'seattle',
  min:23,
  max:65,
  avgCookies: 6.3,
  cookies: 0,
  hourCookies: ['16 cookies', '20 cookies', '35 cookies','48 cookies','56 cookies','77 cookies','93 cookies','144 cookies','119 cookies','84 cookies','61 cookies','23 cookies','42 cookies','57 cookies','Total: 875 cookies']
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