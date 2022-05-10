'use strict'
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////////////
/*
        Ajax Call Section
const getCountryData = function(country){
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();
// same as (line 14)
console.log(request.responseText);

request.addEventListener('load', function(){
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const data1 = JSON.parse(this.responseText);
    console.log(data1);

    const html = ` 
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity =1;
});
}
getCountryData('portugal');
getCountryData('usa');
*/

/*
*************Call Back Hell Section ***********************
*/

const renderCountry = function(data, className = ''){
    const html = ` 
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity =1;
}
const getCountryAndNeighbour = function(country){
    // Ajax Call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    // same as (line 14)
    console.log(request.responseText);
    
    request.addEventListener('load', function(){
        console.log(this.responseText);
    
        const [data] = JSON.parse(this.responseText);
        console.log(data);
  
        // render country 1
        renderCountry(data);
       
        // Get enighbour country (2)
        const [neighbour] = data.borders;

        if(!neighbour) {
            return;
        }
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function(){
           const data2 = JSON.parse(this.responseText);
           console.log(data2);

           renderCountry(data2 , 'neighbour');
        })
    });
    }

  
   /* getCountryAndNeighbour('usa');

    setTimeout(() =>{
        console.log("1 second passed");
        setTimeout(() =>{
            console.log("2second passed");
            setTimeout(() =>{
                console.log("3 second passed");
                setTimeout(() =>{
                    console.log("4 second passed");
            
    }, 1000);
}, 1000);
}, 1000);
}, 1000);
*/

 // Ajax Call country 1
 //const request = new XMLHttpRequest();
 //request.open('GET', `https://restcountries.com/v2/name/${country}`);
 //request.send();

 const renderError = function(msg) {
     countriesContainer.insertAdjacentText('beforeend', msg);
     // to make the containeer visible. 
     countriesContainer.style.opacity = 1;
 }

const getCoutnryData = function(country){
    // fetch returned a proejct
    // handled the promise iwth tthe then method
    // country 2
    fetch(`https://restcountries.com/v2/name/${country}`)
    // we get a respoen transformed to json
   .then(response => {
   console.log(response);
   // if 404 if response is false
   if(!response.ok){
       throw new Error(`Country is not found ${response.status}` );
   }
   return response.json();
})
   // then we take that data and render it to the DOM
   .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0]

      if(!neighbour) {
          return;
      }
      
      // country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    

      })
      .then(response => response.json())
      .then(data => renderCountry(data, 'neighbour'))
      .catch(err => {
          console.error(`${err} *****`);
      renderError(`Something went wrong  ${err.message}. Try again!`);
      })
      .finally(() =>{
        countriesContainer.style.opacity = 1;
      })
};

btn.addEventListener('click', function(){
    getCoutnryData('portugal');
});

getCoutnryData("asdflkjsdf");