$(document).ready(function() {
    $('#btn').click(getPrice);
});

function getPrice() {
    $('#loading').show(); // Mostra o GIF de carregamento

    $.ajax({
        url: "index.php", // Chama o arquivo PHP
        method: "GET",
        success: function(data) {
            const response = JSON.parse(data); // Converte a resposta JSON em objeto
            if(response.price) {
                $('#result').html("BTC Price: $" + parseFloat(response.price).toFixed(2));
            } else {
                $('#result').html("Error fetching price.");
            }
        },
        error: function() {
            $('#result').html("Error fetching price.");
        },
        complete: function() {
            $('#loading').hide(); // Esconde o GIF de carregamento após a resposta
        }
    });
}
