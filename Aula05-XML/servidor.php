<?php
// Define o cabeçalho como XML
header("Content-type: application/xml; charset=UTF-8");

// Início do documento XML
$xml = '<?xml version="1.0" encoding="UTF-8"?>';
$xml .= '<lista_clientes>';

try {
    // Conexão com o banco
    $conn = mysqli_connect("localhost", "root", "", "loja");

    if ($conn) {
        // Consulta todos os clientes
        $result = mysqli_query($conn, "SELECT * FROM cliente");

        while ($cliente = mysqli_fetch_assoc($result)) {
            $xml .= '<cliente>';
            $xml .= '   <id>' . $cliente["id"] . '</id>';
            $xml .= '   <nome>' . htmlspecialchars($cliente["nome"]) . '</nome>';
            $xml .= '   <altura>' . $cliente["altura"] . '</altura>';
            $xml .= '</cliente>';
        }

        mysqli_close($conn);
    } else {
        $xml .= '<erro>Erro ao conectar com o banco de dados</erro>';
    }
} catch (Throwable $th) {
    $xml .= '<erro>Erro ao executar a consulta</erro>';
}

$xml .= '</lista_clientes>';
echo $xml;
