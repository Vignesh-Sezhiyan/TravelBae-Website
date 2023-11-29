import React from 'react'
import v1 from '../assets/varanasi.jpeg'
import v2 from '../assets/varanasi.jpg'

function Varanasi() {
  return (
    <div>
      <div>
        <div className="varanasi-div text-center pt-5">
          <h2 className="mb-2 text-dark">Varanasi</h2>
          <p className="text-muted">Explore The Beauty of Varanasi</p>
        </div>
        <div className="container mt-2">
          <h2 className="mt-4">Welcome to Varanasi</h2>
          <p className="text-muted">
            Varanasi, also known as Banaras or Kashi, is one of the oldest
            continuously inhabited cities in the world and is a major spiritual
            and cultural center in India. Situated on the banks of the Ganges
            River in the northern Indian state of Uttar Pradesh, Varanasi holds
            immense religious significance for Hindus and is considered one of
            the holiest cities in the country.
            <br />
            <br />
            Varanasi is located on the banks of the Ganges, one of the most
            sacred rivers in Hinduism. The ghats (steps leading down to the
            river) are important for religious ceremonies and rituals.
          </p>
          <h3 className="my-4">Explore This also...</h3>
        </div>
        <div className="container mb-4 ">
          <div className="row">
            <div className="col-6 mb-2 ">
              <img src={v1} width={450} height={300} />
            </div>
            <div className="col-lg-6">
              <img src={v2} width={450} height={300} />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="mb-4">Entertainments & Enjoyments</h2>
          <div class="alert alert-info" role="alert">
            Boat Rides on the Ganges
          </div>
          <div class="alert alert-secondary" role="alert">
            Evening Walks along Ghats
          </div>
          <div class="alert alert-success" role="alert">
            Classical Music and Dance Performances
          </div>
          <div class="alert alert-light" role="alert">
            Banarasi Saree Shopping
          </div>
          <div class="alert alert-dark" role="alert">
            Traditional Puppet Shows
          </div>
        </div>
      </div>
    </div>
  );
}

export default Varanasi