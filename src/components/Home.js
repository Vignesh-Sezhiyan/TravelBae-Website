import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import t1 from "../components/assets/ooty.jpeg";
import t2 from "../components/assets/k1.jpg";
import t3 from "../components/assets/taj.jpeg";
import t7 from "../components/assets/taj2.jpeg";

function Home() {
  return (
    <div>
      <div className="home-div text-center pt-5">
        <h2 className="mb-2 text-dark">Welcome to TravelBae</h2>
        <p className="text-muted">Explore Exciting Destinations With Us!</p>
      </div>

      <div
        id="carouselExampleCaptions"
        class="carousel slide mt-2"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={t1} class="d-block w-100" alt="..." height={500} />
            <div class="carousel-caption d-none d-md-block">
              <h5>Ooty</h5>
              <p>
                A picturesque paradise nestled in the Nilgiri Hills, offering
                tranquil landscapes and a charming hill station experience."
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={t7} class="d-block w-100" alt="..." height={500} />
            <div class="carousel-caption d-none d-md-block">
              <h5>TajMahal</h5>
              <p>
                Timeless symbol of love, a breathtaking white marble mausoleum
                in Agra, India, built by Emperor Shah Jahan in memory of his
                beloved wife Mumtaz Mahal.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={t2} class="d-block w-100" alt="..." height={500} />
            <div class="carousel-caption d-none d-md-block">
              <h5>Kodaikanal</h5>
              <p>
                Serene hill station in the Western Ghats, known for its misty
                landscapes, lush greenery, and the scenic beauty of the
                Kodaikanal Lake."
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        <h3 className="text-center mt-4 mb-4">Featured Distinations</h3>
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <img src={t1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Ooty</h5>
                <p class="card-text text-muted">
                  Ooty, is a charming hill station nestled in the Nilgiri Hills
                  of southern India, renowned for its cool climate, and scenic
                  landscapes.
                </p>
                <Link to="/ooty">
                  <button
                    id="button-color"
                    class="btn px-4 bg-primary text-white"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src={t2} class="card-img-top" alt="..." height={200} />
              <div class="card-body">
                <h5 class="card-title">Kodaikanal</h5>
                <p class="card-text text-muted">
                  Kodaikanal, often referred to as the "Princess of Hill
                  Stations," is a picturesque town situated in the Western Ghats
                  of Tamil Nadu.
                </p>
                <Link to="/kodaikanal">
                  <button
                    id="button-color"
                    class="btn px-4 bg-primary text-white"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src={t3} class="card-img-top" alt="..." height={200} />
              <div class="card-body">
                <h5 class="card-title">TajMahal</h5>
                <p class="card-text text-muted">
                  The Taj Mahal is an iconic white marble mausoleum located in
                  iconic white marble iconic white marble Agra, Uttar Pradesh,
                  India.
                </p>
                <Link to="/taj">
                  <button
                    id="button-color"
                    class="btn px-4 bg-primary text-white"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5">
        <h3 className="mt-4 mb-2">Discover More...</h3>
        <p className="text-muted">
          Explore Our Handpicked destinations and create Memories that last a
          lifetime!
        </p>
        <Link to="/destinations">
          <button id="button-color" class="btn px-4 bg-primary text-white ">
            View All Destinations
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
