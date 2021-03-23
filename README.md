# test-srpago
API para venta  web de tickets de películas.

## Como ejecutar el proyecto
Ejecutar en la terminal ubicado en cada carpeta (serviceFilms/serviceUsers). 
```
npm install
node index.js
```
## Dependencias
- **body-parser** : para accesar a la información del cuerpo de las peticiones y convertir los datos a JSON.
- **express** : para la creacion de la api.
- **jwt-simple** : para la autenticación del usuario.
- **moment** : para el manejo de la hora y sus formatos.
- **mysql2** : para el manejo de la base de datos.
- **remotemysql** : un servidor remoto para almacenar la base de datos.
- **sequelize** : como ORM para interactural con la base de datos.

## Estructura del proyecto
Servicio Películas
- **index.js** : Archivo principal del proyecto, donde se inicializar todos los archivos necesarios.
- **db.js** : Archivo con las credenciales para acceder a la base de datos, así como los modelos inicializados y sus asosiaciones.
- **models/films.js** : Definición del modelo de películas.
- **models/citys.js** : Definición del modelo de ciudades.
- **models/films_presentation.js** : Definición del modelo donde se relaciona la película con la ciudad en donde se presentara, horario y asientos.
- **models/reservations.js** : Definición del modelo para reservar una asiento de película a presentar.
- **routes/api.js** : Archivo de inicializacion y uso de las routes.
- **routes/middelwares.js** : Archivo para validar el token de autenticación o cuando un usuario no ha iniciado sesión.
- **routes/api/films.js** : Definición de endpoints para las películas.
- **routes/api/citys.js** : Definición de endpoints para las ciudades.
- **routes/api/films_presentations.js** : Definición de endpoints para las presentación de una película en una ciudad.
- **routes/api/reservations.js** : Definición de endpoints para la reservacion de asientos a una presentación.

Servicio Usuarios
- **index.js** : Archivo principal del proyecto, donde se inicializar todos los archivos necesarios.
- **db.js** : Archivo con las credenciales para acceder a la base de datos, así como los modelos inicializados y sus asosiaciones.
- **models/users.js** : Definición del modelo de usuarios.
- **routes/api.js** : Archivo de inicialización y uso de las routes.
- **routes/api/users.js** : Definición de endpoints para registro e inicio de sesión de los usuarios.

## Endpoints
Servicio Películas
- **/films** : 
  - Metodo: **GET**
    - Descripción: Muetra todas las películas existentes o las peliculas presentadas en una ciudad.
    - Query Strings: null o city.

  - Metodo **POST**
    - Descripción: Agregar una nueva película.
    - Body: title, description, score, director, genre

  - Metodo **PUT**
    - Descripción: Eitar una película.
    - Body: title, description, score, director, genre
    - Query Strings: filmId.

  - Metodo: **DELETE**
    - Descripción: Eliminar una película.
    - Query Strings: filmId.
   
- **/citys** : 
  - Metodo: **GET**
    - Descripción: Muetra todas las ciudades existentes.
    - Query Strings: null.

  - Metodo **POST**
    - Descripción: Agregar un nueva ciudad.
    - Body: name

  - Metodo **PUT**
    - Descripción: Editar una ciudad.
    - Body: name
    - Query Strings: cityId.

  - Metodo: **DELETE**
    - Descripción: Eliminar una ciudad.
    - Query Strings: cityId.

- **/films-presentations** : 
  - Metodo: **GET**
    - Descripción: Muetra las películas que se presentara en una ciudad, horario y asientos.
    - Query Strings: null.

  - Metodo **POST**
    - Descripción: Agregar una nueva película a presentarse en una ciudad.
    - Body: date, seatsAvailable, seatsTotal, filmId, cityId

  - Metodo **PUT**
    - Descripción: Editar una presentacíon de una película.
    - Body: date, seatsAvailable, seatsTotal, filmId, cityId
    - Query Strings: presentationId.

  - Metodo: **DELETE**
    - Descripción: Eliminar la presentacíon de una película.
    - Query Strings: presentationId.

- **/reservations** : 
  - Metodo: **GET**
    - Descripción: Muetra todas las reservaciones.
    - Query Strings: null.
    - Headers: user-token

  - Metodo **POST**
    - Descripción: Reservar tickets de una presentación de una película.
    - Body: filmPresentationId, numTickets, buyerUserId, buyerUsername, buyerEmail
    - Headers: user-token

  - Metodo: **DELETE**
    - Descripción: Eliminar una reservación.
    - Query Strings: reservationId.
    - Headers: user-token
  
Servicio Usuarios
- **/users/register** : 
  - Metodo **POST**
    - Descripción: Registrar un nuevo usuario.
    - Body: username, email, password
   
- **/users/login** : 
  - Metodo **POST**
    - Descripción: Inicio de sesión.
    - Body: username, email, password
