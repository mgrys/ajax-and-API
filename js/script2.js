var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);
function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
function showCountriesList(resp) {
  	countriesList.empty();
resp.forEach(function(item) {
       $('<li>').text(item.name).addClass("kraj").appendTo(countriesList);
       $('<li>').text('Stolica: '+ item.capital).appendTo(countriesList);
       $('<li>').text('Waluta: '+ item.currencies).appendTo(countriesList);
       $('<li>').text('Populacja: '+ Math.round(item.population/1000000) +' mln').appendTo(countriesList);
       $('<li>').text('Język: '+ item.languages).appendTo(countriesList);
       $('<li>').text('----------------------------').appendTo(countriesList);

});
}