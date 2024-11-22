<?php
    echo file_get_contents("https://www.bbc.com/weather/{$_GET["cities"]}")
?>