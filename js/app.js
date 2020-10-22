'use strict'

// Hours of Operation
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieTable = document.getElementById('cookie-table');
console.log('cookie-table');
var allStores = [];

//Constructor!!

function Store(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesSoldPerHourArray = [];
  this.dailyTotal = 0;
  allStores.push(this);
  this.getCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };

  this.calcCookiesSoldPerHour = function () {
    //this.randCust();
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.ceil(this.getCust() * this.avgCookies);
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
      this.dailyTotal += cookiesPerHour;

    }
  };

  this.render = function () {
    this.calcCookiesSoldPerHour();
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
    for (var i = 0; i < hours.length; i++) {
      td = document.createElement('td');
      td.textContent = this.cookiesSoldPerHourArray[i];
      tr.appendChild(td);
    }
    var td = document.createElement('td');
    td.textContent = this.dailyTotal;
    tr.appendChild(td);
    cookieTable.appendChild(tr);
  };
}

function renderHeader(){
  var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = '';
    tr.appendChild(td);
    for (var i = 0; i < hours.length; i++) {
      td = document.createElement('td');
      td.textContent = hours[i];
      tr.appendChild(td);
    }
    var td = document.createElement('td');
    td.textContent = 'Total';
    tr.appendChild(td);
    cookieTable.appendChild(tr);
}


var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

renderHeader();
renderAllStores();



