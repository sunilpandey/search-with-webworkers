import cities from 'cities.json';
let tempCities = cities.slice();
for(let i = 0; i < 7; i++) {
    tempCities = tempCities.concat(tempCities);
}

onmessage = (event) => {
    const matchedCities = tempCities
        .filter(city => city.name.toLowerCase().startsWith(event.data))
        .slice(0, 500)
        .map(city => `<li class="dropdown-item">${city.name}`);
    postMessage({searchString: event.data, matchedCities});
}