const apiKey = '6238aa56a3mshb4256ee68e04f3ap1fc90fjsna8175890429f'; // Replace with your actual RapidAPI key

const updateElement = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.innerText = value;
  } else {
    console.error(`Element with ID '${id}' not found.`);
  }
};

const getWeather = async (city) => {
  try {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6238aa56a3mshb4256ee68e04f3ap1fc90fjsna8175890429f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };

    cityName.innerHTML = city;

    const response = await fetch(url, options);
    const data = await response.json(); // Parsing the JSON response into an object
    console.log(data);

    updateElement('Temp', data.temp);
    updateElement('Temp2', data.temp);
    updateElement('Min_temp', data.min_temp);
    updateElement('Max_temp', data.max_temp);
    updateElement('Cloud_pct', data.cloud_pct);
    updateElement('Feels_like', data.feels_like);
    updateElement('Humidity', data.humidity);
    updateElement('Humidity2', data.humidity);
    updateElement('Wind_speed', data.wind_speed);
    updateElement('Wind_speed2', data.wind_speed);
    updateElement('Wind_degrees', data.wind_degrees);
    updateElement('Sunrise', data.sunrise);
    updateElement('Sunset', data.sunset);
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Call getWeather with the default city when the DOM is loaded
  getWeather('Dehradun');

  const submitForm = document.getElementById('submitForm');
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const cityInput = document.getElementById('city');
    const city = cityInput.value.trim();
    if (city !== '') {
      getWeather(city);
    }
  });
});








 // Add event listener to the button
 document.getElementById("recheckButton").addEventListener("click", function() {
  // Reload the page when the button is clicked
  location.reload();
});












// Function to get live values from the table
function getTableValues() {
  const table = document.querySelector('.table-text-center');
  const tbody = table.getElementsByTagName('tbody')[0];
  const rows = tbody.getElementsByTagName('tr');

  // Array to store the data from the table
  const data = [];

  // Loop through each row in the table
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName('td');
    const rowData = [];

    // Loop through each cell in the row
    for (let j = 0; j < cells.length; j++) {
      rowData.push(cells[j].innerText);
    }

    data.push(rowData);
  }

  return data;
}

// Example of how to use the function to get the data
const tableData = getTableValues();
console.log(tableData); // This will output the live values from the table as an array of arrays





