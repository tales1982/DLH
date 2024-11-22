//Storing the path to my local server
var URL = "index.php"

//Creating the init() that initialize my work
function init(){
    //Create a for loop, to assign the click event for each link

    //Retrieve all the the anchors tags by their tag name
    var links = document.getElementsByTagName("a") 
    console.log(links)

    for(var i = 0; i<links.length; i++){
        var a = links[i]
        console.log("_________________")
        console.log(a)
        a.onclick = linkClicked
    }
}

async function linkClicked(event) {
    event.preventDefault()
    //Retrieving the link/missing piece from the href attribute in <a>
    var href = this.getAttribute("href") 

    //When sending requests to the server, I should make sure to Handle all errors
    try{
        //Send a request to the server to fetch the info through a function
        await fetchArticle(href)
    }catch{
        document.getElementById("errors").innerHTML = "We failed sending the request or something wrong happened on the server side"
    }
}

async function fetchArticle(href){
    //Send the request to the server with the missing part(dynamic part) of the link
    var article = await fetch(URL + "?letter="+href)

    //Retrieve the value given back from the server
    var response = await article.text();

    //Display the result in the div `results`
    document.getElementById("results").innerHTML = response

}
