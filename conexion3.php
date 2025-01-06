<?php 
$servidor = "fdb1030.awardspace.net"; // Dirección del servidor de base de datos
$usuario = "3714088_pokemon"; // Usuario de la base de datos
$contraseña = "qMe@z:2-4uCj7DlD"; // Contraseña de la base de datos
$nombreBD = "3714088_pokemon"; // Nombre de la base de datos

// Crear la conexión
$conexion = new mysqli($servidor, $usuario, $contraseña, $nombreBD);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
} else {
    echo "Conexión exitosa a la base de datos.";
}?>