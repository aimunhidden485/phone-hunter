// phone data loaded----------------------------
const loadPhones = () =>{
    const input = document.getElementById('search-text').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${input}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}

