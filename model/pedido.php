<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


$conexion = mysqli_connect("localhost", "root", "1234", "tareaso", 3307);
$resp = array();
$sql = "SELECT * FROM productos";
$query = mysqli_query($conexion, $sql);
    while ($row = $query->fetch_assoc()) {
        extract($row);
        $arrayItem = array(
            'id' => $id,
            'nombre' => $nombre,
            'desc' => $desc,
            'img' => $img,
            'precio' => $precio
        );
        array_push($resp, $arrayItem);
    }
echo json_encode($resp);

