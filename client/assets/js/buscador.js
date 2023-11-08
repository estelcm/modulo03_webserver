const TMDB_IMAGES_PATH_145 = "http://image.tmdb.org/t/p/w154";

function searchPelis() {
  search = document.querySelector("#search").value;
  url = `http://localhost:3000/api/pelis/tmdb/search?query=${search}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //trespuesta= JSON.stringify(response);
      const url = "http://localhost:3000/api/pelis/tmdb";
      // let trespuesta = "<table>";
      // for (var i = 0; i < response.results.length; i++) {
      //   trespuesta += `<tr><td>${response.results[i].original_title}</td>`;
      //   trespuesta += `<td>${response.results[i].id}</td>`;
      //   trespuesta += `<td>${response.results[i].release_date}</td>`;
      //   trespuesta += `<td><img src="${TMDB_IMAGES_PATH_145}${response.results[i].poster_path}"></td>`;
      //   trespuesta += `<td><form action="${url}/${response.results[i].id}" method="POST" >`;
      //   trespuesta += `<input type="hidden" id="tmdb_id" name="tmdb_id" value="${response.results[i].id}" />`;
      //   trespuesta += `<input type="submit" id="submit" name="submit" value="Grabar" />`;

      //   trespuesta += `</form></td>`;
      //   trespuesta += `</tr>`;
      // }
      // trespuesta += "</table>";
      let trespuesta = "<table class='pelis-table'>";
      for (var i = 0; i < response.results.length; i++) {
        trespuesta += `<tr>`;
        trespuesta += `<td class='pelis-title'>${response.results[i].original_title}</td>`;
        trespuesta += `<td class='pelis-id'>${response.results[i].id}</td>`;
        trespuesta += `<td class='pelis-release'>${response.results[i].release_date}</td>`;
        trespuesta += `<td class='pelis-poster'><img src="${TMDB_IMAGES_PATH_145}${response.results[i].poster_path}"></td>`;
        trespuesta += `<td class='pelis-form'><form action="${url}/${response.results[i].id}" method="POST" >`;
        trespuesta += `<input type="hidden" id="tmdb_id" name="tmdb_id" value="${response.results[i].id}" />`;
        trespuesta += `<input type="submit" id="submit" name="submit" value="Grabar" />`;
        trespuesta += `</form></td>`;
        trespuesta += `</tr>`;
      }
      trespuesta += "</table>";

      // mostrar resultados
      document.getElementById("app").innerHTML = trespuesta;
    })
    .catch((err) => console.error(err));
}

/*
buscador otro proyecto ejemplo 

function searchPelis() {
  search = document.getElementById("search").value;
  //alert("Buscando " + search);

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=es&page=1`,
    TMDB_OPTIONS
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      trespuesta = "";
      const numpagina = response.page;
      trespuesta += `<h3>Página : ${numpagina} de ${response.total_pages} </h3>`;
      trespuesta += `<p><b>Térmimo de busqueda :</b> ${search} </p>`;
      trespuesta += `<p>Resultados</p>`;
      peliculas = response.results;
      console.log(peliculas);
      trespuesta += "<ul>";
      peliculas.forEach((element) => {
        console.log(element);
        trespuesta +=
          "<li>" +
          element.original_title +
          " " +
          `<img src="${TMDB_IMAGES_PATH_145}${element.poster_path}">` +
          element.release_date +
          '  <button onclick="editPeli(' +
          element.id +
          ')">Grabar</button>' +
          '  <button onclick="PeliVideo(' +
          element.id +
          ')">Video</button>' +
          "</li>";
      });
      trespuesta += "</ul>";

      // mostrar resultados
      document.getElementById("resultado").innerHTML = trespuesta;
    })
    .catch((err) => console.error(err));
}
*/
