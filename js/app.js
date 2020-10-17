'use strict'

// Hours of Operation
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattleul = document.getElementById('seattle');

// Ceylin - object literals for each store
var seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesSoldPerHourArray: [],
  dailyTotal: 0,

  randomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  calcCookiesSoldPerHour: function () {
    for (var i = 0; i, hours.length; i++) {
      var cookiesPerHour = this.randomCustomers() * this.avgCookies;
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
      this.dailyTotal += cookiesPerHour;
      //console.log('calculate cookies per hour: ', cookiesPerHour);
    }
  },

  render: function () {
    this.cookiesSoldPerHourArray();
    //console.log('render the list');

    for (var i = 0; i < hours.length; i++) {
      //create an element
      var li = document.createElement('li');
      //give it content
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      //Append to the Dom/parentElement
      seattleul.appendChild(li);
    }
  }

};

seattle.render();