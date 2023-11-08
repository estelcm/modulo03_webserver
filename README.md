
# Catálogo de películas 🎬

Este proyecto es parte del Módulo 03 y consiste en una API que accede a la base de datos de películas en el sitio web http://www.themoviedb.org para seleccionar y almacenar películas en una base de datos propia.

## Requisitos :computer:

- Asegúrate de tener Node.js y npm instalados en tu sistema.
- Necesitarás una base de datos MySQL; en mi caso, he trabajado con MySQL Workbench.
- Registra y obtén credenciales en http://www.themoviedb.org.



## Instalación :white_check_mark:
```markdown

1. Clona este repositorio:

   ```bash
   git clone https://github.com/estelcm/modulo03_webserver.git
   ```

   Luego, navega al directorio del repositorio:

   ```bash
   cd nombre-del-repo
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```
```




# Configuración :arrow_heading_down:

1. Modifica los datos de configuración en el archivo `src/config.js`. Deberás especificar la información de tu base de datos, como el host, el puerto, el usuario, la contraseña, y el nombre de la base de datos.

 
    ```javascript
   export const DB_HOST = process.env.DB_HOST || 'localhost';
   export const DB_PORT = process.env.DB_PORT || 3306;
   export const DB_USER = ... // Completa con tus datos
   export const DB_PASSWORD = ... // Completa con tus datos
   export const DB_NAME = ... // Completa con tus datos
   ...
   ``` 

2. Crea una base de datos llamada "peliculas". A continuación, se muestra la estructura y los datos de la base de datos:

    ```sql
    -- Volcando estructura para la tabla "genero"
    -- ... (Estructura de la tabla genero)

    -- Volcando estructura para la tabla "peliculas"
    -- ... (Estructura de la tabla peliculas)

    -- Volcando estructura para la tabla "peli_genero"
    -- ... (Estructura de la tabla peli_genero)
    ```

# Uso :computer:

Para iniciar la aplicación, sigue estos pasos:

1. Entorno de desarrollo:

   ```bash
   npm run dev
   ```

2. Entorno de producción:

   ```bash	
   npm run start
   ```

Luego, puedes acceder a la aplicación a través de los endpoints o utilizar un cliente REST como POSTMAN.

# Endpoints de la API :rocket:

- [Endpoint "Benvinguts" (api/)](https://modulo03webserver-production.up.railway.app)
- [Endpoint "Api" (api/pelis)](https://modulo03webserver-production.up.railway.app/api/pelis)
- [Endpoint "Api" (api/pelis)](https://modulo03webserver-production.up.railway.app/api/pelis)
- [Documentación (POSTMAN)](https://documenter.getpostman.com/view/25347432/2s9YXe6P7e)

# Aplicación en Internet

- [API Pelis](https://nodeexpressmysql-production.up.railway.app)
- [Railway](https://railway.app)

