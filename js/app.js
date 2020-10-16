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
    for (var = i=0; i < hours.length; i++){
        var numberCustomers = randomCustomer(this.min, this.max);
        var cookiesPerHour = numberCustomers * this.avgCookies;
        console.log(cookiesPerHour);
      }
        //console.log(`${this.name} sold ${this.numberCustomers});

      }
    
    
  }
};

//helper function to get random number,
seattle.getCookies();

console.log(seattle);

function randomCookies (min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

