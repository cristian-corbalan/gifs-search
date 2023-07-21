'use strict'
// Random GiF
// const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=nERS8Q07MBJm7SOwgL9xDdcPyMr95agG&tag=&rating=g'

const GiphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=nERS8Q07MBJm7SOwgL9xDdcPyMr95agG&q=@@value@@&limit=8&offset=0&rating=g&lang=es&bundle=messaging_non_clips';
const inputSearch = document.getElementById('searchInput');
const formSearch = document.getElementById('searchForm');
const divContent = document.getElementById('content');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Searching...");

    // Get value
    let value = inputSearch.value;
    value = value.replace(/ /g, '+');

    // Create URL with the value
    let url = GiphyUrl.replace('@@value@@', value)

    console.info(url);

    fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.info(res.data);

            divContent.innerHTML = '';

            for (const item of res.data) {
                console.log(item.images)
                let img = document.createElement('img');
                img.setAttribute('src', item.images.fixed_width.url);
                img.setAttribute('alt', item.title);
                divContent.appendChild(img);
            }
        })
})