import React from 'react';

 const Products = () => {
    return (
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Products & Services</h2>
              <h3 className="section-subheading text-muted">Check out our available dragons, services and accessories below:</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fab fa-d-and-d fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Dragons</h4>
              <p className="text-muted">We have all your favorite pure-bred racing dragons, as well as companion breeds, and rescues. There's a perfect dragon for every family, our expert staff are trained to help you find the perfect fit. Find your next scaly friend now!</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-graduation-cap fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Training</h4>
              <p className="text-muted">Got a rowdy dragon at home? Is your little cave boy teaching your dragon bad habits? Our trainers can help tame even the wildest Hungarian Horntail! We'll give you the tools and strategies to keep your flamebreathing friend happy and healthy!</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-fire-extinguisher fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Accessories</h4>
              <p className="text-muted">Raising a dragon can be a full-time job. We have everything you need to prepare for your latest addition to the family. Scale brushes, racing saddles, fire extinguishers, we've got them all at prices that won't break the bank! </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Products;
