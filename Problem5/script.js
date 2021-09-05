//1. Create a request variable
var request = new XMLHttpRequest();
//2. Create a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//3. Send a request
request.send();
//4. Load the response
request.onload = function(){
    var arr = [];
    var data = JSON.parse(this.response);
    var currencies = data.map((element)=>{
        let curr = element.currencies;
        for(let j=0; j<curr.length; j++){
            if(curr[j].code === "USD"){
                arr.push(element.name);
            }
        }
    });

    console.log(arr);
}

