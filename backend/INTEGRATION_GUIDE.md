# Guía de Integración Backend-Frontend ERYONX

Esta guía detalla los pasos para conectar el panel administrativo desarrollado en React con el backend en PHP 8.x sobre Namecheap.

## 1. Configuración de la API REST
Cada módulo administrativo consumirá un endpoint PHP. La estructura recomendada para cada archivo en `backend/api/` es:

```php
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/db.php';

$database = new Database();
$db = $database->getConnection();

// Lógica de la API...
```

## 2. Peticiones desde React (Frontend)
Para conectar con el backend, crea un archivo `src/lib/api.ts` con la configuración de Axios o Fetch:

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'https://tu-dominio.com/backend/api';

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${API_URL}/${endpoint}`);
  return await response.json();
};
```

## 3. Despliegue en Namecheap (cPanel)

1.  **Directorio Backend**: Sube la carpeta `backend` a la raíz de tu hosting (fuera de `public_html` es más seguro).
2.  **Base de Datos**: Usa el archivo `database/schema.sql` para crear las tablas en phpMyAdmin.
3.  **Frontend**: 
    *   Ejecuta `npm run build`.
    *   Sube el contenido de la carpeta `dist` a `public_html`.
4.  **.htaccess**: Asegúrate de tener un archivo `.htaccess` en `public_html` para manejar las rutas de React:
    ```apache
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.html [L]
    </IfModule>
    ```

## 4. Seguridad
*   **Contraseñas**: Usa `password_hash()` y `password_verify()` en PHP.
*   **JWT**: Implementa un sistema de tokens (JSON Web Tokens) para proteger las rutas del panel administrativo.
*   **Validación**: Valida todos los datos entrantes en PHP antes de insertarlos en la base de datos.
