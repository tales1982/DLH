//Give the server name/path to the URL variable
var URL = "index.php";

function init(){
	//Get all Anchor tags by using the :getElementsByTagName("a")
	var linkTags = document.getElementsByTagName("a");

	//Track the results you got in the linkTags variable
	console.log(linkTags);

	//Prepare each Anchor to be clicked by using a `for` loop
	/*
		we must have a starting point, a condition and a counter
		our condition should be as long as we haven't stepped out of the
		number of the links we have.
		To know how many links we have use the `.length` function. 
	*/
	for(var i = 0; i < linkTags.length; i++){
		/*
			to access each link we have to access it by its index
			each link accessed should be stored in a variable `a`
			to be given the `onclick` event after it. 
		*/
		var a = linkTags[i];
		//Keep track of each link you are accessing
		console.log(a);
		//A function called `getArticle` should be bound to the `onclick` event
		a.onclick = getArticle;
	}
}

/*
	The getArticle is a function that will communicate with the server
	and updates one part of the webpage. For that it needs to be
	an async function.
*/
async function getArticle(event){
	/*
		Remove the default behavior of Anchor tags
		to do so the function should have the `event` parameter
		and the first line of code should be preventing the default 
		behavior to that event 
		such as : event.preventDefault()
	*/
	event.preventDefault();
	/*
		retrieving the href attribute related to the link
		being clicked, we need 'this' keyword to achieve that
		and we need to retrieve the value in the href attribute by using
		`.getAttribute("href") `

	*/
	
	var href = this.getAttribute("href")
	//Keep track of the link you are targeting
	console.log(href);

	//Use a try-catch block to avoid the broke down of the webpage in case of code errors
	try{
		/*
			fetch data here by sending a request to the server through a function
			`fetchArticle()`, do not forget we need to give the missing piece of the
			link to the server. This is done by adding a parameter to our function
			the parameter is the `href` variable that is storing the link related
		*/
		await fetchArticle(href);
	}catch(error){
		/* We had a Typo error here, instead of document.getElementsById();
		it should be : document.getElementById()*/

		document.getElementById("output").innerHTML= "<p>Error while fetching data</p>";
	}
}

//Create the function `fetchArticle` to fetch data here
async function fetchArticle(href){
	/*
		in a variable `article` we send the request to the server
		using the `fetch()`
		this function will have the URL as first parameter since it is
		the link to our server.
		in addition to that, we will add to it the value of the `href`
		we retrieved and we have as argument for the `fetchArticle`.
		to do that we have to add a variable to the link on the server side
		in php variable are created as the following: ?varName=
		the variable created should have the `href` as value such as:
		?letter= href
	*/
	var article = await fetch(URL + "?letter="+href);

	/*
		the `articleResult` is the variable where we retreive the page 
		form the `article` in a text format by using the  : .text()
	*/
	var articleResult = await article.text();

	//Keep trak of what you have retrieved
	console.log(articleResult);

	//Finish displaying the data
	document.getElementById("output").innerHTML = articleResult;
}

