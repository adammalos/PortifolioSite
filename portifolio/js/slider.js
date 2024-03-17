function Carrossel ({callback}) {
  return (
    <div ref={callback}>
    <div className="col-12 mx-auto">
        <div className="carrossel container-carrossel mx-auto">
            <p className="projeto-title fs-1 fw-bold">Meus projetos
              <img className="gear" src="img/gear-fill.svg" alt=""/>
            </p>
            <div id="carouselExample" className="carousel carousel-light slide" data-bs-touch="true">
              {/* indicador  */}
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
              </div>
               {/* slide 1  */}
              <div className="carousel-inner shadow d-flex">
                <div className="carousel-item active" data-bs-interval="10000">
                  <a href="https://github.com/adammalos" target="_blank">
                    <img className="slide-img d-block w-100" src="img/porsch.jpg" alt="Primeiro slide"/>
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Nome do projeto</h3>
                    <p>Clique na imagem para visitar o diretório do projeto.</p>
                  </div>
                </div>
                 {/* slide 2  */}
                <div className="carousel-item d-flex" data-bs-interval="2000">
                  <a href="https://github.com/adammalos" target="_blank">
                    <img className="slide-img d-block w-100"
                      src="img/wizarding-world-legacy-link-reward-wallpaper-0eaee25c51d148b5ada70c8944b7e199.jpg"
                      alt="Primeiro slide"/>
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Nome do projeto</h3>
                    <p>Clique na imagem para visitar o diretório do projeto.</p>
                  </div>
                  {/* slide 3  */}
                </div>
                <div className="carousel-item">
                  <a href="https://github.com/adammalos" target="_blank">
                    <img className="slide-img d-block w-100" src="img/bloodborne.jpg" alt="Primeiro slide"/>
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Nome do projeto</h3>
                    <p>Clique na imagem para visitar o diretório do projeto.</p>
                  </div>
                </div>
                {/* slide 4  */}
                <div className="carousel-item" data-bs-interval="3000">
                  <a href="https://github.com/adammalos" target="_blank">
                    <img className="slide-img d-block w-100" src="img/5Bvg7u.jpg" alt="Primeiro slide"/>
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h3>Nome do projeto</h3>
                    <p>Clique na imagem para visitar o diretório do projeto.</p>
                  </div>
                </div>
              </div>
              {/* botões carrossel  */}
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

const rootElements = document.getElementsByClassName("Carousel");

for (let i = 0; i < rootElements.length; i++) {
  const root = ReactDOM.createRoot(rootElements[i]);
  root.render(
    <Carrossel callback={() => console.log("rendered")} />
  );
}