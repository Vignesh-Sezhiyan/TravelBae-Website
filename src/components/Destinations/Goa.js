import React from "react";
import goa1 from "../assets/goa.jpeg";
import goa2 from "../assets/goa2.jpeg";

function Goa() {
  return (
    <div>
      <div className="Goa-div text-center pt-5">
        <h2 className="mb-2 text-dark">Goa</h2>
        <p className="text-muted">Explore The Beauty of Goa</p>
      </div>
      <div className="container mt-2">
        <h2 className="mt-4">Welcome to Goa</h2>
        <p className="text-muted">
          Goa is a state located on the southwestern coast of India, within the
          region known as the Konkan. It is India's smallest state by area and
          the fourth smallest by population. Goa has a unique blend of Indian
          and Portuguese cultures, reflecting its history as a former Portuguese
          colony. This is evident in its architecture, cuisine, and religious
          practices.
        </p>
        <h3 className="my-4">Explore This also...</h3>
      </div>
      <div className="container mb-4 ">
        <div className="row">
          <div className="col-6 mb-2 ">
            <img src={goa1} width={450} height={300} />
          </div>
          <div className="col-lg-6">
            <img src={goa2} width={450} height={300} />
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="mb-4">Entertainments & Enjoyments</h2>
        <div class="alert alert-info" role="alert">
          Photography
        </div>
        <div class="alert alert-primary" role="alert">
          Beach Parties
        </div>
        <div class="alert alert-secondary" role="alert">
          Nightclubs and Bars
        </div>

        <div class="alert alert-success" role="alert">
          Live Music Venues
        </div>
        <div class="alert alert-danger" role="alert">
          Water Sports
        </div>
      </div>
    </div>
  );
}

export default Goa;
