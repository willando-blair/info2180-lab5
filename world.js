document.addEventListener('DOMContentLoaded', function()
{
    const srchCountryBtn = document.getElementById("countryLookup"); 
    const srchCityBtn = document.getElementById("cityLookup");
    const srchField = document.getElementById("country");
    const result = document.getElementById("result");

    srchCountryBtn.addEventListener("click", function(){
        const xhr = new XMLHttpRequest();
        console.log("Looking up country..."); //debug

        const input = srchField.value;
            
        var url = "world.php?country="+ encodeURIComponent(input) + "&city=false";
            
        xhr.open('GET', url, true);
           
        xhr.onload = function(){
            if (this.status == 200){
                result.innerHTML = this.responseText;
                console.log(result.innerHTML);
            }
        }

        xhr.onerror = function(){
            console.log("Request Error!");
        }
            
        xhr.send();
    });

    srchCityBtn.addEventListener("click", function(){
        const xhr = new XMLHttpRequest();
        console.log("Looking up city..."); //debug

        const input = srchField.value;
        
        var url = "world.php?country="+ encodeURIComponent(input) + "&city=true";
    
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if(this.status == 200){
                result.innerHTML = this.responseText;
                console.log(result.innerHTML);
            }
        }
        xhr.onerror = function() {
            console.log("Request Error!");
        }
    
        xhr.send();
    });
})