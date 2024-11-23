// Define a URL base para o arquivo PHP onde as requisições serão enviadas
var URL = "index.php";

// Define a função `init` como a função a ser executada quando a janela carregar
window.onload = init;

// Função que inicializa o comportamento do script após carregar a página
function init() {
    // Obtém todos os elementos de link (`<a>`) no documento
    var links = document.getElementsByTagName("a");

    // Itera por todos os links encontrados
    for (let i = 0; i < links.length; i++) {
        // Obtém o elemento atual do link
        let a = links[i];
        // Adiciona um evento de clique ao link que chama a função `clickedLink`
        a.onclick = clickedLink;
    }
}

// Função assíncrona para tratar o clique em um link
async function clickedLink(event) {
    // Previne o comportamento padrão do link (que é navegar para o `href`)
    event.preventDefault();

    try {
        // Obtém o valor do atributo `href` do link clicado
        let href = this.getAttribute("href");

        // Envia uma requisição para o arquivo PHP definido (index.php)
        let response = await fetch(URL);

        // Converte a resposta do servidor em texto para manipulação
        let txt = await response.text();

        // Encontra o elemento com o ID `results` para exibir os dados retornados
        let res = document.getElementById("results");

        // Se o conteúdo de `results` estiver vazio, exibe um indicador de carregamento
        if (!res.textContent.trim()) {
            // Insere o ícone de carregamento no elemento com o ID `loading`
            document.getElementById("loading").innerHTML = "<img src='loading.gif'>";
           
            // Chama a função para processar e exibir os dados do continente
            fetchContinent(txt, href);
        } else {
            // Se `results` já possui conteúdo, limpa o conteúdo existente
            res.innerHTML = "";
            // Exibe novamente o indicador de carregamento
            document.getElementById("loading").innerHTML = "<img src='loading.gif'>";
            // Chama a função para processar e exibir os dados do continente
            fetchContinent(txt, href);
        }
    } catch {
        // Se ocorrer um erro, exibe uma mensagem no elemento com o ID `error`
        document.getElementById("error").innerHTML =
            "<span>Error while fetching data</span>";
    }
}

// Função para buscar os dados do continente
function fetchContinent(txt, href) {
    // Cria um novo objeto DOMParser para processar o HTML retornado
    let doc = new DOMParser().parseFromString(txt, "text/html");

    // Obtém todas as tabelas do documento retornado pelo servidor
    let all_tables = doc.getElementsByTagName("table");

    // Obtém a tabela correspondente ao índice `href` (associada ao link clicado)
    let targeted_table = all_tables[href];

    // Encontra o elemento com o ID `results` onde a tabela será exibida
    let res = document.getElementById("results");

    // Adiciona a tabela alvo ao elemento `results`
    res.appendChild(targeted_table);

    // Remove o indicador de carregamento, pois os dados foram carregados
    document.getElementById("loading").innerHTML = "";
}
