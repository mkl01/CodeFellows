
//***********************************************************************
// Returns a random integer between min (included) and max (included) ***
// Using Math.round() will give you a non-uniform distribution!       ***
//***********************************************************************

function getRandomIntInclusive(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//***********************************************************************
// donutShop constructor object used as model for each donut shop 
// with methods to determin average daily and hourly donut sales per shop
//***********************************************************************

function donutShop(name, openHours, hourlyMin, hourlyMax, averageSale) 
{
  this.name         = name;
  this.openHours    = openHours;  
  this.hourlyMin    = hourlyMin;
  this.hourlyMax    = hourlyMax;
  this.averageSale  = averageSale;
  this.donutHour    = function()
    {
      var random = getRandomIntInclusive(this.hourlyMin, this.hourlyMax);
      return this.openHours * random;   
    };

  this.donutsPerDay = function()
    {
      return this.donutHour() * this.openHours;
    };

  this.donutsAverage  = function()
    {
      this.donutsAverage = this.donutsPerDay() / this.openHours;
      return Math.round(this.donutsAverage);
    };
}

 var shop = []; 

 shop[0] = new donutShop ("Downtown", 8, 8, 43, 4.5);
 shop[1] = new donutShop ("Capitol Hill", 24, 4, 37, 2);
 shop[2] = new donutShop ("South Lake Union", 10, 9, 23, 6.33);
 shop[3] = new donutShop ("Wedgewood", 7, 2, 28, 1.25);
 shop[4] = new donutShop ("Ballard", 10, 8, 58, 3.75);

 var numberOfShops = shop.length;
 var i = 0;
 var message;

 for (i = 0; i < numberOfShops; i++)  {
  message  = (" Shop Name: "        + shop[i].name + 
              " OpenHours: "        + shop[i].openHours + 
              " Hourly Min: "       + shop[i].hourlyMin +
              " Hourly Max: "       + shop[i].hourlyMax +
              " Average Sale: "     + shop[i].averageSale +
              " Donuts per Hour: "  + shop[i].donutHour() +
              " Donuts average: "   + shop[i].donutsAverage() +
              " Donuts Per Day: "   + shop[i].donutsPerDay()); 
  console.log (message);
  } 

alert (" shop 0 name       "  + shop[0].name);
alert (" shop 0 donutHour  "  + shop[0].donutHour());

alert (" shop 5 name       "  + shop[4].name);
alert (" shop 5 donutHour  "  + shop[4].donutHour());