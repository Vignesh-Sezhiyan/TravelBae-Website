import React from 'react'
import t1 from '../assets/taj.jpeg'
import t2 from '../assets/taj2.jpeg'

function Taj() {
  return (
    <div>
      <div>
        <div className="taj-div text-center pt-5">
          <h2 className="mb-2 text-dark">TajMahal</h2>
          <p className="text-muted">Explore The Beauty of TajMahal</p>
        </div>
        <div className="container mt-2">
          <h2 className="mt-4">Welcome to TajMahal</h2>
          <p className="text-muted">
            The Taj Mahal is one of the most iconic and renowned structures in
            the world, located in Agra, India. It is considered a masterpiece of
            Mughal architecture and a symbol of love
            <br />
            <br />
            The Taj Mahal is often regarded as a symbol of eternal love. The
            construction of the monument was a testament to Shah Jahan's deep
            love for his wife Mumtaz Mahal.
          </p>
          <h3 className="my-4">Explore This also...</h3>
        </div>
        <div className="container mb-4 ">
          <div className="row">
            <div className="col-6 mb-2 ">
              <img src={t1} width={450} height={300} />
            </div>
            <div className="col-lg-6">
              <img src={t2} width={450} height={300} />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="mb-4">Entertainments & Enjoyments</h2>
          <div class="alert alert-success" role="alert">
            Sunset Views from Mehtab Bagh
          </div>
          <div class="alert alert-secondary" role="alert">
            Boat Ride on Yamuna River
          </div>
          <div class="alert alert-info" role="alert">
            Taj Nature Walk
          </div>

          <div class="alert alert-danger" role="alert">
            Agra Fort
          </div>
          <div class="alert alert-dark" role="alert">
            Photography
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taj