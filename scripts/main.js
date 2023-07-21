'use strict'
const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=nERS8Q07MBJm7SOwgL9xDdcPyMr95agG&tag=&rating=g'
const inputSearch = document.getElementById('searchInput');
const formSearch = document.getElementById('searchForm');
const divContent = document.getElementById('content');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Searching...");

    let value = inputSearch.value;

    fetch(giphyUrl)
        .then(res => res.json())
        .then(res => {
            console.info(res.data.images);
        })
})