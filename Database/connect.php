<?php

class Connect extends mysqli{
    function __construct(){
        parent::__construct("localhost", "root", "1234", "tareaso", 3307);
        $this->set_charset("utf8");
        $this->connect_error == null ? "Exito al conectar con la bd" : die("Error al conectar a la base de datos");
    }
}