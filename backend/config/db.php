<?php
/**
 * Configuración de Conexión a Base de Datos - ERYONX
 * Hosting: Namecheap cPanel
 */

class Database {
    private $host = "localhost";
    private $db_name = "tu_nombre_de_base_de_datos"; // Cambiar por el nombre creado en cPanel
    private $username = "tu_usuario_db";             // Cambiar por el usuario creado en cPanel
    private $password = "tu_password_db";            // Cambiar por la contraseña del usuario
    public $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8mb4");
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $exception) {
            echo "Error de conexión: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
