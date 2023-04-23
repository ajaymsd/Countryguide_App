
var searchBut=document.getElementById("search-country");
var countryInput=document.getElementById("country-inp");
var result=document.getElementById("result");

searchBut.addEventListener("click",function(){
   
    var countryName=countryInput.value;
    let API_URL=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(API_URL);
    fetch(API_URL).then((response)=>response.json()).then((data)=>{
       
        result.innerHTML=`
       
       <div class="content-wrapper text-center" >
       <img src="${data[0].flags.svg}" alt="none" class="flag text-center">
       <h2>${data[0].name.common}</h2>
       <br>
       <br>
       <h5>Capital : ${data[0].capital}</h5>
       <br>
       <h5>Continent : ${data[0].continents[0]}</h5>
       <br>
       <h5>Population : ${data[0].population}</h5>
       <br>
       <h5>Languages : ${Object.values(data[0].languages).toString().split(",").join(",")}</h5>
       <br>
       <h5>Currencies : ${data[0].currencies[Object.keys(data[0].currencies)].name}</h6>
       </div>
    `
    });
    
})