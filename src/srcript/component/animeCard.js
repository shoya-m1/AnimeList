class AnimeCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set anime(anime) {
    this._anime = anime;
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ ` 
        <style>
          
          :host{
            width:100%;
          }
          .card{
            overflow:hidden;
            position:relative;
            max-height: 300px;
            
          }

          .card:hover .card-body{
            opacity:100%;
            transition:.3s;
          }
          .card-title {
            color: white;
            transition: 0.3s;
          }
  
          .card-title:hover {
            color: #ffc107;
          }
          
          .card-body{
            opacity:0;
            bottom:0;
            transition:.3s;
            background-color:rgba(0, 0, 0, 0.571);
            width:100%;
          }

          .card-subtitle{
            font-size: 10px !important;
            top:0;
          }
          .card-title{
            font-size:15px !important;
          }
        </style>
        
        <div class="card h-100 bg-black border-black">
          <img src="${this._anime.images.jpg.image_url}" class="card-img-top">
          <div class="card-body position-absolute">
            <a class="text-decoration-none detail-anime" href="#" data-bs-toggle="modal" data-bs-target="#movieDetail" data-malid="${this._anime.mal_id}">
              <b class="card-title ">${this._anime.title}</b>
            </a>
          </div>
        </div>
        
      `;
  }
}

customElements.define("anime-card", AnimeCard);
