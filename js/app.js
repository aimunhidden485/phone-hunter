// phone data loaded----------------------------
const loadPhones = () =>{
    const input = document.getElementById('search-text')
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${input.value.toLowerCase()}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
    input.value = ''
}

// displaying phones------------------------------------------
const displayPhones = phones =>{
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = ''
    console.log(!phones)
    if (phones == false) {
      document.getElementById('error-msg').style.display = 'block'
      
    }
    else {
      document.getElementById('error-msg').style.display = 'none'
      
    }
    
   const cut =phones.slice(0, 20)
    cut.forEach (phone =>{
      const div = document.createElement('div')
     div.innerHTML= `
<div class="col">
  <div class="card phone-card">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.brand}</h5>
      <p class="card-text">${phone.phone_name}</p>
      <button onclick="detailsLoaded('${phone.slug}')" class = "search-button">Details</button>
    </div>
  </div>
</div>
`
      console.log(phone)
      phoneContainer.appendChild(div)
  })
   }


// phone details loaded---------------------------
const detailsLoaded = details =>{
  const url = `https://openapi.programming-hero.com/api/phone/${details}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayDetails(data.data))
}

// Display phone details----------------------------
const displayDetails = data =>{
  const phoneDetails = document.getElementById('phone-details')
  phoneDetails.textContent = ''
  console.log(data)
  const div = document.createElement('div')
div.innerHTML= `<div class="card details-card">
<img src="${data.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${data.name}</h5>
 
  <p class="card-text">${data.releaseDate ? data.releaseDate: 'no realease date found'}</p>
  <p class="card-text"><span>Main Features:</span> ${data.mainFeatures.storage}, ${data.mainFeatures.displaySize}, ${data.mainFeatures.chipset}, ${data.mainFeatures.memory}</p>
  <p class="card-text"><span>Sensors:</span> ${data.mainFeatures.sensors}</p>
  <p class="card-text"><span>Others:</span> ${data.others.USB}, ${data.others.WLAN}</p>
  
</div>`
 phoneDetails.appendChild(div)
}

