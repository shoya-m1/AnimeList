// File: src/script/component/AnimeDetail.js

class AnimeDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set anime(anime) {
    this._anime = anime;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          .description{
            background-coor: rgba(14, 14, 14, 1) !important;
          }
        </style>

        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 pb-4">
              <img src="${this._anime.images.jpg.image_url}" class="img-fluid" />
            </div>
            <div class="description col-md">
              <ul class="list-group">
                <li class="list-group-item active text-light"><h4>${this._anime.title}</h4></li>
                <li class="list-group-item active text-light"><strong class="text-warning">Duration </strong>: ${this._anime.duration}</li>
                <li class="list-group-item active text-light"><strong class="text-warning">Genres </strong>: ${this._anime.genres.map((genre) => genre.name)}</li>
                <li class="list-group-item active text-light"><strong class="text-warning">Producers </strong>: ${this._anime.producers.map((producer) => producer.name)}</li>
                <li class="list-group-item active text-light"><strong class="text-warning">Synopsis </strong> :<br>${this._anime.synopsis}</li>
              </ul>
            </div>
          </div>
        </div>`;
  }
}

customElements.define("anime-detail", AnimeDetail);
