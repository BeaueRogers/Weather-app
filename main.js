var API_URL = 'http://api.wunderground.com/api/c39e76581b5753a9/conditions/geolocation/geolookup/forecast10day/q/';

var button = document.querySelector(".tempbutton");

button.onclick = function () {
  var input = document.querySelector(".tempbox");
  var zipcode = input.value;
  
  getJSON(API_URL + zipcode + '.json', function (data) {
  	var span = document.querySelector('span');
  	span.innerHTML = data.current_observation.temp_f;
	});
};
locatebutton.onclick = function () {
navigator.geolocation.getCurrentPosition(function(location) {
  var lat = location.coords.latitude;
  var long = location.coords.longitude; 
  
  getJSON(API_URL + lat + "," + long + ".json", function(data)
  var span1 = document.querySelector('span1');
  span1.innerHTML = data.geolocation
}
};
                                         
      

function getJSON(url, cb) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };

  xhr.send();
}
