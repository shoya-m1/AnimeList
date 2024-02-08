import "../component/searchBar.js";
import "../component/animeCard.js";
import "../component/animeDetail.js";
import $ from "jquery";
import axios from "axios";
import BASEURL from "./BASEURL.js";
import animeDetailEvent from "./modalDetail.js";

let searchResult = null;

searcAnimes("/top/anime");
$("search-bar")
  .find(".search-button")
  .on("click", () => {
    searchResult = null;
    searcAnimes(`/anime?q=${$("search-bar").val()}`);
  });

function searcAnimes(getURL) {
  axios
    .get(`${BASEURL}${getURL}`)
    .then((response) => {
      searchResult = response.data.data;
      displaAnimes(searchResult);
      animeDetailEvent();
      if (searchResult.length === 0) {
        const h1 = $("<h2></h2>").addClass("mt-5 text-center fw-bold text-secondary").text("Anime Not Found");
        $(".anime-container").append(h1);
      }
    })
    .catch(() => {
      console.error("Data gagal didapatkan");
    });
}

function displaAnimes(animes) {
  $(".anime-container").empty();
  $.each(animes, function (_, anime) {
    const animeCardElement = $("<anime-card></anime-card>").addClass("col-6 col-sm-4 col-md-3 my-3").get(0);
    animeCardElement.anime = anime;
    $(".anime-container").append(animeCardElement);
  });
}
