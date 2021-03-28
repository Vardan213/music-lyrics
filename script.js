const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');
const next = `http://api.deezer.com/search?limit=15&q=${search.value}&index=15`

const apiURL = 'https://api.lyrics.ovh';

async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    drawSongs(data)
    console.log(data)
}


function drawSongs(data) {
   data.data.forEach(element => {
       console.log(element)
       result.innerHTML += `
        <ul class ="songs">
            <li><span><strong>${element.artist.name}</strong> - ${element.title}</span>
                <button class="btn">Get lyrics</button>
            </li>
        </ul>
    `


    more.innerHTML = `<button class = "centered button">More songs</button>`
   })
}

// async function moreSongs(term) {
//     const res = await fetch(`${next}/suggest/${term}`);
//     data = await res.json();
//     drawSongs(data)
//     console.log(data)
// }


// more.addEventListener("click", (e) => {
//     e.preventDefault()
//     moreSongs()
// })



form.addEventListener("submit", (e) => {
    e.preventDefault()
    searchSongs(search.value)
})
