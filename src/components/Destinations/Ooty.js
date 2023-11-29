import React from 'react'
import o1 from '../assets/ooty.jpeg'
import o2 from '../assets/ooty2.jpeg'

function Ooty() {
  return (
    <div>
      <div>
        <div className="ooty-div text-center pt-5">
          <h2 className="mb-2 text-dark">Ooty</h2>
          <p className="text-muted">Explore The Beauty of Ooty</p>
        </div>
        <div className="container mt-2">
          <h2 className="mt-4">Welcome to Ooty</h2>
          <p className="text-muted">
            Ooty, officially known as Udhagamandalam, is a popular hill station
            located in the Nilgiri Hills of Tamil Nadu, India. Known for its
            pleasant climate, lush landscapes, and colonial charm, Ooty is a
            favorite destination for tourists seeking a retreat into the hills
            <br />
            <br />
            This artificial lake is a popular spot for boating. Visitors can
            enjoy paddle boats, rowboats, or motorboats on the lake and take in
            the scenic views of the surrounding hills.
          </p>
          <h3 className="my-4">Explore This also...</h3>
        </div>
        <div className="container mb-4 ">
          <div className="row">
            <div className="col-6 mb-2 ">
              <img src={o1} width={450} height={300} />
            </div>
            <div className="col-lg-6">
              <img src={o2} width={450} height={300} />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="mb-4">Entertainments & Enjoyments</h2>
          <div class="alert alert-primary" role="alert">
            Boating on Ooty Lake
          </div>
          <div class="alert alert-secondary" role="alert">
            Botanical Gardens
          </div>
          <div class="alert alert-success" role="alert">
            Nilgiri Biosphere Nature Park
          </div>

          <div class="alert alert-danger" role="alert">
            Tea Estate
          </div>
          <div class="alert alert-dark" role="alert">
            Doddabetta Peak
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ooty