import express from "express";
import { pool } from "./db.js";
import { PORT, TMDB_FETCH_OPTIONS, TMDB_LANG } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Benviguts");
});
app.get("/api", (req, res) => {
  const respuesta = "<H1>API PELICULAS</H1>";
  res.send(respuesta);
});

app.get("/api/pelis", async (req, res) => {
  const [rows] = await pool.query("SELECT * from peliculas");
  console.log(rows);
  res.json(rows);
});

app.post("/api/pelis", async (req, res) => {
  const params = req.params;
  console.log(rows);
  res.json(rows);
});

/* RUTA ERRONEA O HACEMOS TEMPLATES O ACCEDEMOS DESDE OTRO SERVIDOR MEDIANTE FETCH */
app.get("/client/", (req, res) => {
  res.redirect("client/index.html");
});
/* mostramos pelicula de tmdb */

app.post("/api/pelis/tmdb/:tmdb_id", async (req, res) => {
  //console.log(req)
  const tmdb_id = req.params.tmdb_id;
  fetch(
    `https://api.themoviedb.org/3/movie/${tmdb_id}?language=${TMDB_LANG}`,
    TMDB_FETCH_OPTIONS
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      console.error(err);
      res.send("error" + err.message);
    });
});

app.get("/api/pelis/tmdb/search", async (req, res) => {
  // req.query accede a los elemnto de una query
  const search = req.query.query;
  console.log("🟨req.query  : " + req.query);
  console.log("⚠ req.query.query : " + req.query.query);
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&language=${TMDB_LANG}`;
  console.log(url);
  fetch(url, TMDB_FETCH_OPTIONS)
    .then((response) => response.json())
    .then((response) => {
      //console.log(response)
      res.send(response);
    })
    .catch((err) => {
      console.error(err);
      res.send("error" + err.message);
    });
});

app.get("/api/pelis/tmdb/generos", async (req, res) => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?language=${TMDB_LANG}`;

  try {
    const response = await fetch(url, TMDB_FETCH_OPTIONS);
    if (!response.ok) {
      throw new Error(
        `Error al hacer la solicitud: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Hubo un error al obtener los géneros de películas desde TMDb.",
    });
  }
});

// buscar segun el tipo de GeolocationCoordinates...
// app.get("/api/pelis/tmdb/generos/:genreId", async (req, res) => {
//   const genreId = req.params.genreId;
//   const moviesUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=${TMDB_LANG}`;

//   try {
//     const moviesResponse = await fetch(moviesUrl, TMDB_FETCH_OPTIONS);
//     if (!moviesResponse.ok) {
//       throw new Error(
//         `Error al hacer la solicitud de películas: ${moviesResponse.status} - ${moviesResponse.statusText}`
//       );
//     }

//     const moviesData = await moviesResponse.json();
//     // Ahora, moviesData contiene las películas del género específico.
//     // Puedes enviar esta información como respuesta o realizar cualquier otra operación que necesites.
//     res.json(moviesData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       error: "Hubo un error al obtener películas del género desde TMDb.",
//     });
//   }
// });

app.listen(PORT);

console.log("listening on port " + PORT);
