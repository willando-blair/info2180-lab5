document.addEventListener('DOMContentLoaded', function()
{
    const srchCountryBtn = document.getElementById("countryLookup"); 
    const srchCityBtn = document.getElementById("cityLookup");
    const srchField = document.getElementById("country");

    srchCountryBtn.addEventListener("click", btnclicked);
    srchCityBtn.addEventListener("click", btnclicked);

    function btnclicked(event){
        event.preventDefault();
        var clickedBtn = event.target;
        const xhr = new XMLHttpRequest();

        if (clickedBtn.id == "countryLookup"){
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

        console.log("a country yah look");


        }
        else if (clickedBtn.id == "cityLookup") {
            console.log("a city yah look");

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
        }


    }



})