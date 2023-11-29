import React from 'react'
import k1 from '../assets/munnar.jpeg'
import k2 from '../assets/munnar2.jpeg'


function Munnar() {
  return (
    <div>
      <div>
        <div className="munnar-div text-center pt-5">
          <h2 className="mb-2 text-dark">Munnar</h2>
          <p className="text-muted">Explore The Beauty of Munnar</p>
        </div>
        <div className="container mt-2">
          <h2 className="mt-4">Welcome to Munnar</h2>
          <p className="text-muted">
            Munnar is a picturesque hill station located in the Western Ghats
            mountain range in the Indian state of Kerala. Known for its
            breathtaking landscapes, lush greenery, and tea plantations, Munnar
            is a popular tourist destination
            <br />
            <br />
            Munnar is renowned for its vast tea plantations that cover the
            hillsides. Visitors can take guided tours of tea estates to learn
            about the tea-making process and enjoy panoramic views of the lush
            greenery.
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
            Tea Plantation Tours
          </div>
          <div class="alert alert-secondary" role="alert">
            Adventure Activities
          </div>
          <div class="alert alert-success" role="alert">
            Wildlife Spotting
          </div>
          <div class="alert alert-danger" role="alert">
            Ayurvedic Spa and Wellness
          </div>
          <div class="alert alert-info" role="alert">
            Photography
          </div>
        </div>
      </div>
    </div>
  );
}

export default Munnar