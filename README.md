# miniAPP

Mini aplicación web que te permite subir imágenes a Firebase Storage y almacenar los datos en una colección en MongoDB.

# Instalación y configuración
Clona el repositorio
```
git clone https://github.com/n0e13/miniAPP.git
```
Instala las dependencias
```
npm i
```
Renombra el archivo `.env.example`a `.env` y rellena con tus datos
```
# PORT
PORT= <-- Puerto en el que lanzar la aplicación -->

# MONGO
DBMONGO_URI= <-- URI de la BBDD de MongoDB -->

# FIREBASE
FB_BUCKET= <-- URI de la carpeta de Firebase Storage sin gs:// -->
```
Genera claves privadas de tu proyecto de Firebase. Para ello vete a la ⚙ de configuración, `Cuentas de servicio` y pulsar el botón `Generar nueva clave privada`. Se abre una ventana y pulsar en `Generar clave`. El archivo `.json` debes renombrarlo a `firebase.json` y añadirlo a la raíz del proyecto. Ejemplo de archivo
```javascript
{
  "type": "service_account",
  "project_id": --- Nombre del proyecto ---,
  "private_key_id": --- Aquí la key id ---,
  "private_key": --- Aquí la clave privada ---,
  "client_email": --- Un correo ---,
  "client_id": --- Id del cliente ---,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": --- URL del certificado ---
}
```
Lanza el proyecto en local
```
npm start 

```
# Demo
![miniApp](https://user-images.githubusercontent.com/98730817/164948982-384e993a-c535-48cd-a8fa-77a01905b676.gif)
