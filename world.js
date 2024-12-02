document.addEventListener('DOMContentLoaded', function()
{
    const srchCountryBtn = document.getElementById("countryLookup"); 
    const srchCityBtn = document.getElementById("cityLookup");
    const srchField = document.getElementById("country");
    const result = document.getElementById("result");

    srchCountryBtn.addEventListener("click", function(){
        const xhttp = new XMLHttpRequest();
        console.log("Looking up country..."); //debug

        const input = srchField.value;
        var url = "world.php?country="+ encodeURIComponent(input) + "&city=false";
        xhttp.open('GET', url, true);
           
        xhttp.onload = function(){
            if (this.status == 200){
                result.innerHTML = this.responseText;
            }
        }

        xhttp.onerror = function(){
            console.log("Request Error!");
        }
            
        xhttp.send();
    });

    srchCityBtn.addEventListener("click", function(){
        const xhttp = new XMLHttpRequest();
        console.log("Looking up city..."); //debug

        const input = srchField.value;
        var url = "world.php?country="+ encodeURIComponent(input) + "&city=true";
        xhttp.open('GET', url, true);

        xhttp.onload = function() {
            if(this.status == 200){
                result.innerHTML = this.responseText;
            }
        }

        xhttp.onerror = function() {
            console.log("Request Error!");
        }
    
        xhttp.send();
    });
})