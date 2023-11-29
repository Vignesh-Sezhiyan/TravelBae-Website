import React from 'react'
import k1 from '../assets/k1.jpg'
import k2 from '../assets/k2.jpeg'

function Kodaikanal() {
  return (
    <div>
      <div>
        <div className="Goa-div text-center pt-5">
          <h2 className="mb-2 text-dark">Kodaikanal</h2>
          <p className="text-muted">Explore The Beauty of Kodaikanal</p>
        </div>
        <div className="container mt-2">
          <h2 className="mt-4">Welcome to Kodaikanal</h2>
          <p className="text-muted">
            Kodaikanal is a charming hill station located in the Dindigul
            district of the Indian state of Tamil Nadu. It is situated in the
            Western Ghats at an elevation of about 2,133 meters (6,998 feet)
            above sea level. Kodaikanal is known for its picturesque landscapes,
            pleasant climate, and diverse flora and fauna.
            <br /> <br />
            Kodaikanal is often referred to as the "Princess of Hill Stations"
            due to its stunning natural beauty. The town is surrounded by dense
            forests, rolling hills, and meadows, making it a popular destination
            for nature lovers.
          </p>
          <h3 className="my-4">Explore This also...</h3>
        </div>
        <div className="container mb-4 ">
          <div className="row">
            <div className="col-6 mb-2 ">
              <img src={k1} width={450} height={300} />
            </div>
            <div className="col-lg-6">
              <img src={k2} width={450} height={300} />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="mb-4">Entertainments & Enjoyments</h2>
          <div class="alert alert-primary" role="alert">
            Boating on Kodaikanal Lake
          </div>
          <div class="alert alert-secondary" role="alert">
            Coaker's Walk
          </div>
          <div class="alert alert-info" role="alert">
            Photography
          </div>
          <div class="alert alert-success" role="alert">
            Pine Forest
          </div>
          <div class="alert alert-danger" role="alert">
            Cycling
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kodaikanal