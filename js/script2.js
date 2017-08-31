var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');
var flagname = $('#flag_name');
$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
        img = $('<img />', {
                id: 'flag',
                src: item.flag,
                width: 100
            })
            .appendTo(flagname);
        $('<p>').text(item.name).addClass("kraj").appendTo(flagname);
        $('<ul>').addClass("cos").appendTo(flagname)
        $('<li>').text('Stolica: ' + item.capital).appendTo('.cos');
        $('<li>').text('Waluta: ' + item.currencies[0].name).appendTo('.cos');
        $('<li>').text('Populacja: ' + Math.round(item.population / 1000000) + ' mln').appendTo('.cos');
        $('<li>').text('Język: ' + item.languages[0].name).appendTo('.cos');
        $('<li>').text('----------------------------').appendTo('.cos');

    });
}