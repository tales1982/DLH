# DLH
## Instruções para Acessar a Pasta /opt/lampp e Rodar Arquivos PHP com XAMPP
### Pré-requisitos
° Ter o XAMPP instalado no sistema. Você pode baixar o XAMPP para Linux aqui.
° Permissões de administrador para acessar e modificar a pasta /opt.
### Passos para Acessar a Pasta /opt/lampp
Abrir o Terminal:

° Pressione Ctrl + Alt + T no teclado para abrir o terminal.
 Navegar até a Pasta   
 `/opt/lampp`

° No terminal, digite o comando abaixo e pressione Enter:

`cd /opt/lampp`
- Abrir o Gerenciador de Arquivos com Permissões de Administrador:

° Para acessar e modificar arquivos dentro de /opt/lampp através do gerenciador de arquivos, execute o seguinte comando no terminal:
`sudo nautilus /opt/lampp`

- Isso abrirá o gerenciador de arquivos com permissões de superusuário, permitindo que você navegue pela pasta e edite arquivos.
Colocando Arquivos PHP no Diretório do Servidor
Navegar até a Pasta htdocs:

- Dentro de `/opt/lampp`, você encontrará uma pasta chamada htdocs, que é o diretório padrão onde você deve colocar seus arquivos PHP para rodá-los no navegador.
No terminal, você pode navegar até htdocs com:   
`cd /opt/lampp/htdocs`

## Adicionar Arquivos PHP:

° Coloque os arquivos PHP que você quer rodar dentro da pasta htdocs. Por exemplo, se você tiver um arquivo chamado index.php, mova-o para htdocs:

`sudo cp ~/Downloads/index.php /opt/lampp/htdocs/`
- Rodando o XAMPP e Acessando os Arquivos
- Iniciar o XAMPP:

° Para rodar o XAMPP, use o seguinte comando no terminal:
`sudo /opt/lampp/lampp start`
Isso iniciará o servidor Apache, que é necessário para rodar arquivos PHP.
Acessar o Arquivo PHP no Navegador:

° Abra um navegador web e digite o seguinte endereço para acessar o arquivo index.php:

- http://localhost/index.php
Se você colocou o arquivo PHP em uma subpasta dentro de htdocs, ajuste o caminho de acordo. Por exemplo, se o arquivo estiver em `/opt/lampp/htdocs/meusite`, o URL será:

- http://localhost/meusite/index.php
Parando o XAMPP
Quando terminar, você pode parar o XAMPP com o seguinte comando:
`sudo /opt/lampp/lampp stop`
Esse README fornece instruções detalhadas sobre como acessar a pasta /opt/lampp, onde colocar os arquivos PHP e como rodá-los usando o XAMPP.







