import "../component/animeCard.js";
import "../component/animeDetail.js";
import BASEURL from "./BASEURL.js";
import $ from "jquery";
import axios from "axios";

export default function animeDetailEvent() {
  const animeDetailButton = $(".detail-anime");
  const modalBody = $(".modal-body");

  animeDetailButton.each(function () {
    $(this).on("click", function () {
      modalBody.empty();
      const mal_id = $(this).data("malid");

      axios.get(`${BASEURL}/anime/${mal_id}`).then((response) => {
        const animeDetail = $("<anime-detail></anime-detail>");
        animeDetail[0].anime = response.data.data;
        modalBody.append(animeDetail);
      });
    });
  });
}
