import React from "react";
import { Link } from "react-router-dom";
import t1 from "../components/assets/ooty.jpeg";
import t2 from "../components/assets/k1.jpg";
import t3 from "../components/assets/taj.jpeg";
import t4 from '../components/assets/goa.jpeg'
import t5 from '../components/assets/munnar.jpeg'
import t6 from '../components/assets/varanasi.jpeg'

function Destinations() {
  return (
    <div className="my-5">
      <div className="row mb-4">
        <div className="col-md-4 mb-5">
          <div class="card">
            <img src={t1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Ooty</h5>
              <p class="card-text text-muted">
                Ooty, is a charming hill station nestled in the Nilgiri Hills of
                southern India, renowned for its cool climate, and scenic
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
                The Taj Mahal is often considered a symbol of eternal love. The
                story goes that Shah Jahan was heartbroken after the death of
               
                Taj Mahal as a tribute to her.
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
        <div className="col-md-4">
          <div class="card">
             <img src={ t6} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Varanasi</h5>
              <p class="card-text text-muted">
                Varanasi, also known as Kashi or Banaras, is one of the oldest
                and holiest cities in India, situated on the banks of the Ganges
                River.
              </p>
              <Link to="/varanasi">
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
            <img src={t4} class="card-img-top" alt="..." height={230} />
            <div class="card-body">
              <h5 class="card-title">Goa</h5>
              <p class="card-text text-muted">
                Goa, located on the west coast of India, is a popular tourist
                destination known for its beautiful beaches, and rich cultural
                heritage.
              </p>
              <Link to="/goa">
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
            <img src={t5} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Munnar</h5>
              <p class="card-text text-muted">
                Munnar's tea gardens, including the Tata Tea Museum, offer
                insights into the region's extensive history of tea cultivation.
              </p>
              <Link to="/munnar">
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
  );
}

export default Destinations;
