function weather() {
	var city = document.getElementById('cityName').value;
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '54e9dd0779mshd969a4d18157c51p1316e0jsnefdc6858466e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};
	
	var weatherData = {}; // initialize an empty object to store weather data
	
	fetch(('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city), options)
	  .then(response => response.json())
	  .then(response => {
		// populate the weatherData object with the weather data
		weatherData.temp = response.temp;
		weatherData.feels = response.feels_like;
		weatherData.humidity = response.humidity;
		weatherData.max = response.max_temp;
		weatherData.min = response.min_temp;
		weatherData.wind_speed = response.wind_speed;
		weatherData.cloud_cover = response.cloud_pct;
		console.log(weatherData); // log the weatherData object
		console.log(response);
		
		// Temperature
		document.getElementById('temp').innerHTML = weatherData.temp;
		if(weatherData.temp < 0)
			document.getElementById('temp_img').src = './Assets/temp_0.png';
		else if(weatherData.temp < 5)
			document.getElementById('temp_img').src = './Assets/temp_1.png';
		else if(weatherData.temp < 10)
			document.getElementById('temp_img').src = './Assets/temp_2.png';
		else if(weatherData.temp < 15)
			document.getElementById('temp_img').src = './Assets/temp_3.png';
		else if(weatherData.temp < 20)
			document.getElementById('temp_img').src = './Assets/temp_4.png';
		else if(weatherData.temp < 30)
			document.getElementById('temp_img').src = './Assets/temp_5.png';
		else if(weatherData.temp < 40)
			document.getElementById('temp_img').src = './Assets/temp_6.png';
		else
			document.getElementById('temp_img').src = './Assets/temp_7.png';
	  	
		// Max Temperature
		document.getElementById('max').innerHTML = weatherData.max;
		if(weatherData.max < 0)
		  	document.getElementById('max_img').src = './Assets/temp_0.png';
	  	else if(weatherData.max < 5)
		  	document.getElementById('max_img').src = './Assets/temp_1.png';
	  	else if(weatherData.max < 10)
		  	document.getElementById('max_img').src = './Assets/temp_2.png';
	  	else if(weatherData.max < 15)
		  	document.getElementById('max_img').src = './Assets/temp_3.png';
	  	else if(weatherData.max < 20)
		  	document.getElementById('max_img').src = './Assets/temp_4.png';
	  	else if(weatherData.max < 30)
		  	document.getElementById('max_img').src = './Assets/temp_5.png';
	  	else if(weatherData.max < 40)
		  	document.getElementById('max_img').src = './Assets/temp_6.png';
	  	else
		  	document.getElementById('max_img').src = './Assets/temp_7.png';
	
		// Min Temperature
			document.getElementById('min').innerHTML = weatherData.min;
		if(weatherData.min < 0)
		  	document.getElementById('min_img').src = './Assets/temp_0.png';
	  	else if(weatherData.min < 5)
		  	document.getElementById('min_img').src = './Assets/temp_1.png';
	  	else if(weatherData.min < 10)
		  	document.getElementById('min_img').src = './Assets/temp_2.png';
	  	else if(weatherData.min < 15)
		  	document.getElementById('min_img').src = './Assets/temp_3.png';
	  	else if(weatherData.min < 20)
		  	document.getElementById('min_img').src = './Assets/temp_4.png';
	  	else if(weatherData.min < 30)
		  	document.getElementById('min_img').src = './Assets/temp_5.png';
	  	else if(weatherData.min < 40)
		  	document.getElementById('min_img').src = './Assets/temp_6.png';
	  	else
		  	document.getElementById('min_img').src = './Assets/temp_7.png';
	  	
		// Feels Like
		document.getElementById('feels').innerHTML = weatherData.feels;
		if(weatherData.feels < 0)
		  	document.getElementById('feel_img').src = './Assets/temp_0.png';
	  	else if(weatherData.feels < 5)
		  	document.getElementById('feel_img').src = './Assets/temp_1.png';
	  	else if(weatherData.feels < 10)
		  	document.getElementById('feel_img').src = './Assets/temp_2.png';
	  	else if(weatherData.feels < 15)
		  	document.getElementById('feel_img').src = './Assets/temp_3.png';
	  	else if(weatherData.feels < 20)
		  	document.getElementById('feel_img').src = './Assets/temp_4.png';
	  	else if(weatherData.feels < 30)
		  	document.getElementById('feel_img').src = './Assets/temp_5.png';
	  	else if(weatherData.feels < 40)
		  	document.getElementById('feel_img').src = './Assets/temp_6.png';
	  	else
		  	document.getElementById('feel_img').src = './Assets/temp_7.png';
	  	
		// Wind Speed
		document.getElementById('speed').innerHTML = weatherData.wind_speed;
		if(weatherData.wind_speed < 0.5)
		  	document.getElementById('wind_img').src = './Assets/wind_0.png';
	  	else if(weatherData.wind_speed < 0.8)
		  	document.getElementById('wind_img').src = './Assets/wind_1.png';
	  	else if(weatherData.wind_speed < 1.3)
		  	document.getElementById('wind_img').src = './Assets/wind_2.png';
	  	else if(weatherData.wind_speed < 1.8)
		  	document.getElementById('wind_img').src = './Assets/wind_3.png';
	  	else
		  	document.getElementById('wind_img').src = './Assets/wind_4.png';
	  	
		// Humidity
		document.getElementById('humidity').innerHTML = weatherData.humidity;
		
		if(weatherData.humidity < 30)
		  	document.getElementById('humid_img').src = './Assets/humidity_0.png';
	  	else
		  	document.getElementById('humid_img').src = './Assets/humidity_1.png';
	  	
		// Cloud Cover
		document.getElementById('cloud').innerHTML = weatherData.cloud_cover;
		
		if(weatherData.cloud_cover < 5)
		  	document.getElementById('cloud_img').src = './Assets/cloud_0.png';
	  	else if(weatherData.cloud_cover < 15)
		  	document.getElementById('cloud_img').src = './Assets/cloud_1.png';
	  	else if(weatherData.cloud_cover < 30)
		  	document.getElementById('cloud_img').src = './Assets/cloud_2.png';
	  	else if(weatherData.cloud_cover < 50)
		  	document.getElementById('cloud_img').src = './Assets/cloud_3.png';
	  	else if(weatherData.cloud_cover < 65)
		  	document.getElementById('cloud_img').src = './Assets/cloud_4.png';
	  	else if(weatherData.cloud_cover < 75)
		  	document.getElementById('cloud_img').src = './Assets/cloud_5.png';
	  	else if(weatherData.cloud_cover < 90)
		  	document.getElementById('cloud_img').src = './Assets/cloud_6.png';
	  	else
		  	document.getElementById('cloud_img').src = './Assets/cloud_7.png';
	  	
	  })
	  .catch(err => console.error(err));

	  
  }
  