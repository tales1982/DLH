var URL="ex1.php"

async function getTxt() {
	var answer = await fetch(URL)
	var fileValue = await answer.text()
	document.getElementById("output").innerHTML = fileValue
}