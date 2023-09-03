import './index.css'
const worker = new Worker(new URL('./worker.js', import.meta.url));
let lastSentEvent = ''
worker.onmessage = (event) => {
    if(lastSentEvent == event.data.searchString) {
        document.getElementById('dropdown-list').innerHTML = event.data.matchedCities;
        document.getElementById('loader').classList.add('hide');
        document.getElementById('dropdown-list').classList.remove('hide');
    }
}

document.getElementById('search-box').addEventListener('keyup', (event) => {
    if(lastSentEvent == event.target.value) return;
    worker.postMessage(lastSentEvent = event.target.value);
    document.getElementById('loader').classList.remove('hide');
    document.getElementById('dropdown-list').classList.add('hide');
});
console.log('Hello');