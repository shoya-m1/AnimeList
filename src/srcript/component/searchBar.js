class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector(".input-keyword").value;
  }

  render() {
    this.innerHTML = `
            <style>
            .input-group {
              border-radius: 10px;
              width: 100%;
              border: 1px solid rgba(255, 255, 255, 0.397);
              height: 45px;
              display: flex;
              align-items: center;
            }
            
            .input-group > input {
              width: 80%;
              border-radius: 10px;
              border: none;
              outline: none;
            }
            .input-group > input::placeholder {
             color:#6D6D6D;
            }
            
            .input-group > button {
              color: white;
              width: 20%;
              height: 45px;
              margin-top:-1px;
              margin-right: -16px;
              border: 1px solid #ffc107;
              background-color: #ffc107;
              border-radius: 10px;
              cursor: pointer;
              transition: all 0.3s;
            }
            .input-group > button:hover {
              background-color: rgba(14, 14, 14, 1);
              border: 1px solid rgba(255, 255, 255, 0.397);
            }
            @media screen and (max-width: 600px) {
              .input-group {
                height:auto;
              }
              .input-group > button{
                height:auto;
                width: 30%;
                
              }
            }
            
            </style>

            <div class="row">
              <div class="col-11 col-md-8">
                <div class="input-group mb-3">
                  <input type="text" class="form-control ps-3 me-4 text-light bg-dark input-keyword" placeholder="Search Movie..." />
                  <button class="btn btn-outline-light fw-semibold text-light search-button" type="button" id="button-addon2">Search</button>
                </div>
              </div>
            </div>
        `;

    this.querySelector(".search-button").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
