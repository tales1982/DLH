<?php
// Define o URL da API da Binance
$url = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";

// Inicializa a sessão cURL
$ch = curl_init($url);

// Configurações da cURL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// Executa a solicitação e obtém a resposta
$response = curl_exec($ch);

// Verifica se houve um erro
if($response === false) {
    echo json_encode(["error" => "Erro ao buscar o preço"]);
} else {
    echo $response;
}

// Fecha a sessão cURL
curl_close($ch);
?>
