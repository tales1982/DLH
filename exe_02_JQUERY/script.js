const URL = "index.php";

//recebe uma resdposta do servidor
async function getTxt(){
    let response = await fetch(URL);//faz a requisição
    let data = await response.text();//pega o texto da resposta

    Document.getElementById("txtContent").innerHTML = data;
    console.log(data);
}