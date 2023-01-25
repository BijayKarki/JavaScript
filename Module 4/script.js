'use strict';

const title = document.getElementById('showTitle')
const link = document.getElementById('url')
const banner = document.getElementById('imgShow')
const summary = document.getElementById('summary')
const genres = document.getElementById('genres')

async function showInfo() {

    const show = prompt('Please enter your search word here! ')
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${show}`

    const response = await fetch(url)
    const data = await response.json()

    title.innerText = data.name
    link.href = data.url;
    banner.src = data.image.medium;
    summary.innerHTML = data.summary;
    genres.innerText = data.genres.join(' | ')
}

showInfo()
