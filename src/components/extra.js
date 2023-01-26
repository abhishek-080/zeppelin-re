import React from 'react'

const extra = () => {
  return (
    <div>
        
    <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
            JoGeek
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
          <a href="//github.io/jo_geek" target="_blank">Github</a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
          <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
          <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
        </div>
      </div>


      <div id="carouselExampleControls" class="carousel slide bg-primary" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex">
                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex">
                <div class="col-lg-3 p-3">

                    <img src="images/2.png" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/2.png" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>
            </div>         
         </div>
          <div class="carousel-item">
            <div class="d-flex">
                <div class="col-lg-3 p-3">

                    <img src="images/2.png" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/2.png" class="d-block w-100" alt="...">
                </div>

                <div class="col-lg-3 p-3">

                    <img src="images/1.jpg" class="d-block w-100" alt="...">
                </div>
            </div>       
                  </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default extra