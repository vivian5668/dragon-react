import React from 'react';

 const Gallery = props => {

   const allDragons = props.map(function(dragon, index) {
     return <span key={index}>{dragon}</span>
   })

    return (
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Meet Our Dragons</h2>
              <h3 className="section-subheading text-muted">Here are the dragons we have available. Please signup or login to bring one home to your cave today!</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={allDragons} alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>{allDragons}</h4>
                <p className="text-muted">{allDragons}</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    )
  }

export default Gallery;
