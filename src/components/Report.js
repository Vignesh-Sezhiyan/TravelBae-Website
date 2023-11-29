import React from 'react'


function Report() {
  return (
    <div>
      <div className="home-div text-center pt-5">
        <h2 className="mb-2 text-dark">Travel Report</h2>
        <p className="text-muted">
          Explore insights and statistics about Our Travel Destinations
        </p>
      </div>
      <div className="container">
        <h2 className="mt-4">Destinations OverView</h2>
        <p className="text-muted ms-2">
          Here is the Summary of Key Informations About Our Travel Distinations
        </p>
        <div class="alert alert-primary" role="alert">
          Total no.Of Destinations: 6
        </div>
        <div class="alert alert-secondary" role="alert">
          Most popular Destination: Munnar**
        </div>
        <div class="alert alert-info" role="alert">
          Total Satisfied Customers: 100
        </div>
        
        <h2 className="mt-4">Customers FeedBacks</h2>
        <p className="text-muted">
          Read Out our Customers have to say About their Travel Experience
        </p>
        <div class="accordion my-4" id="accordionExample">
          <div class="accordion-item ">
            <h2 class="accordion-header " id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                #About Comfort...
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Our team of <strong>experienced and knowledgeable </strong>
                travel experts works diligently to stay informed about the
                latest travel advisories, health guidelines, and security
                measures. We collaborate with trusted and reputable partners,
                airlines, and accommodations to guarantee the utmost safety for
                our clients.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                #About Accomodation...
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Our expert team negotiates exclusive deals to ensure that you
                not only get the best rates but also experience exceptional
                hospitality. We
                <strong> prioritize your comfort and satisfactio</strong>n, and
                our carefully selected accommodations are equipped with modern
                amenities, impeccable service, and a unique ambiance to make
                your stay memorable.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                #About Safe & Secure
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Our team of dedicated professionals meticulously plans and
                executes every aspect of your trip, adhering to the highest
                safety standards. We stay updated on the latest travel
                advisories,{" "}
                <strong>
                  health guidelines, and security measures to provide
                </strong>
                you with accurate and timely information.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report