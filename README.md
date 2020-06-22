# Ejercicio de programación para postular a CSW Consultores Ambientales

Se me solicitó hacer esta prueba para postular al trabajo.

#### Probar visitando enlace

La aplicación está corriendo en AWS EC2, en una instancia donde tengo varios contenedores Docker.

Enlace: http://ec2-18-230-150-149.sa-east-1.compute.amazonaws.com:3050.

#### Probar con Docker

Para probar con Docker, correr `docker pull olivaresvjuanp/ejercicio-csw:0.1.0`, luego correr `docker run -p 3050:3050 olivaresvjuanp/ejercicio-csw:0.1.0`.

La aplicación estará expuesta en el siguiente enlace: http://localhost:3050.

Repositorio en Docker Hub: https://hub.docker.com/repository/docker/olivaresvjuanp/ejercicio-csw.

#### Probar clonando el repositorio

Hacer `git clone https://github.com/olivaresvjuanp/ejercicio-csw.git`, y luego, en el directorio `ejercicio-csw/src` hacer una copia del archivo `config-example.json` y renombrar la copia a `config.json`. En este archivo se debe poner un token de la API de Mapbox. Luego de esto, correr `yarn` para instalar las dependencias de la aplicación, y finalmente correr `yarn start` (se abrirá la aplicación en el navegador).

La aplicación estará expuesta en el siguiente enlace: http://localhost:3000.

#### Tecnologías que usé:
- React
- React Redux
- Redux
- Redux Thunk
- TypeScript
- Express
- React Leaflet
- Mapbox API
- Material-UI
- Axios
- React Transition Group
- Docker
- AWS

# Desafío

># Fake API
>
>Ejercicio de programación para postular a [CSW Consultores
>Ambientales](https://csw.cl/)
>
>Este repositorio contiene las instrucciones del ejercicio y los datos para
>realizarlo.
>
>## Ejercicio
>
>1. Programe un pequeño servidor web con Nodejs que exponga una página web
>   online, que muestre en un mapa los datos obtenidos de este repositorio.
>
>Para el mapa se recomienda usar la biblioteca
>[Leaflet](https://leafletjs.com/), pero se puede usar otra si se prefiere.
>
>Los datos se encuentran expuestos en este mismo repositorio via github pages:
>
>  - [GeoJson](http://cswcl.github.io/fake-api/monumentos_historicos_extracto.geojson)
>  - [CSV](http://cswcl.github.io/fake-api/monumentos_historicos_extracto.csv)
>
>Los datos se deben obtener al momento de cargar la página mediante una petición
>a github.io, **no se considerará válido el ejercicio si se cargan localmente**.
>
>Se deben correlacionar los datos del GeoJson con los del CSV mediante el campo
>`id`, de manera que el mapa muestre el **nombre** de los monumentos, su
>**latitud** y **longitud** en un popup al cliquear los puntos del mapa.
>
>2. Despliegue el servidor para que sea accesible vía web.
>
>Es posible usar algún servicio gratuito como [Heroku](https://heroku.com/) o
>bien el que se prefiera.
>
>3. Una vez desplegado el software, contactar a CSW via
>[GetOnBoard](https://www.getonbrd.cl/) para indicarnos:
>  - enlace donde se encuentra desplegado el software
>  - enlace al repositorio git de la solución (debe ser de acceso público)
