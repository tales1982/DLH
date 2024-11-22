var URL = "index.php"

function init(){
    //Step1: Retrieve all the links
    var links = document.getElementsByTagName("a")

    //Step2: Iterate through the links to give the onclick event for each link
    //Using a loop for

    for(var i=0; i < links.length; i++){
        //Access the link by the index which is the i var in the for loopto deal with it
        var a = links[i]

        //Assign the onclick event to the link and bind it to a function getWeather
        a.onclick = getWeather;
    }
}

//Create the getWeather function
async function getWeather(event){
    event.preventDefault()

    //Creating an intermediate function that sends the request to the server
    //We might expect to handle errors (try-catch)
    try{
        //Step1: Retrieve the link from the href attribute
        var href = this.getAttribute("href")

        //Step2: Call the intermediate function, and give it the proper link
        await fetchWeatherData(href)
    }catch{
        document.getElementById("errors").innerHTML = "Error while fetching the Data"
    }
}


//Creating the intermediate function
async function fetchWeatherData(href){
    //Step1: Send a request to the server using the fetch() 
    //and pass on to the server the variable cities that has the proper link
    var sendingRequest = await fetch(URL + "?cities="+ href)

    //Step2: Retrieve the response given back in a text format
    var response = await sendingRequest.text()
    fixFormat(response)
}

function fixFormat(response){
    console.log(response)
    //Step1: Convert the text response to an html document
    var doc = new DOMParser().parseFromString(response, "text/html")
    console.log("--------------")
    console.log(doc)
    //Step2: Retrieve the right value from its address
    var data = doc.querySelector(".wr-value--temperature--c")

    //Step3:Display the data in my div `results`
    document.getElementById("results").innerHTML = data.innerHTML
}