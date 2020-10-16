'use strict'

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var seattle = {
  name: 'Seattle',
  min:23,
  max:65,
  avgCookies: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotal:0,
 
  calcCookiesSoldPerHour: function (){
    for (var i=0; i < hours.length; i++){
        var numberCustomers = randomCustomer(this.min, this.max);
        var cookiesPerHour = numberCustomers * this.avgCookies;
        console.log(cookiesPerHour);
      }
        //console.log(`${this.name} sold ${this.numberCustomers})
};

//helper function to get random number,
seattle.getCookies();

console.log(seattle);

function randomCookies (min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var parentElement = document.getElementById ('cookie-stand');

var article = document.createElement('article');
parentElement.appendChild(article);


var h2 = document.createElement('h2');
h2.textContent = seattle.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i=0; i < seattle.length; i++){
  var li = document.createElement('li');
  li.textContent = seattle.hours[i];
  ul.appendChild(li);
}
// var img = document.createElement('img');
// img.setAttribute('src','images/'+ seattle.name +)