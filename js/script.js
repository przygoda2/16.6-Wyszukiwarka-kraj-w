var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
        var text;

  	var flag = document.createElement('img');
	flag.src = item.flag;
	flag.innerHTML += 'nazwa';
	countriesList.appendChild(flag);
    
    var name = document.createElement('li');
    name.classList.add('name');
    name.innerText = item.name;
    countriesList.appendChild(name);

    var region = document.createElement('li');
    region.innerHTML = "<b>Region: </b> " + item.region;
    countriesList.appendChild(region);

    var capital = document.createElement('li');
    capital.innerHTML = "<b>Capital: </b> "  +	 item.capital;
    countriesList.appendChild(capital);

    var population = document.createElement('li');
    population.innerHTML = "<b>Population: </b> "  +	 item.population;
    countriesList.appendChild(population);

    var currencies = document.createElement('li');
	currencies.innerHTML = "<b>Waluta: </b> " + item.currencies[0].name;
	countriesList.appendChild(currencies);

	var languages = document.createElement('li');
	languages.innerHTML = "<b>Język: </b> " + item.languages[0].name;
	countriesList.appendChild(languages);
   
    var freeSpace = document.createElement('li');
    freeSpace.classList.add('info');	
    freeSpace.innerHTML = "</br>";
    countriesList.appendChild(freeSpace);
    });
}