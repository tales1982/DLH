var URL ="index.php"

function showPrice(){
	$("#loading").html("<img src='loading.gif'>")
	$("#output").load("index.php .css-1bwgsh3", finishLoading)
}

function finishLoading(){
	$("#loading").html("")
}