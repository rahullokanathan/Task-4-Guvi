//1. Create a request variable
var request = new XMLHttpRequest();
//2. Create a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//3. Send a request
request.send();
//4. Load the response
request.onload = function(){
    var data = JSON.parse(this.response);
    var totalPopulation = data.reduce((acc,item)=>{
        return acc + item.population;
    },0);
    console.log("Total population: " +totalPopulation);
}

