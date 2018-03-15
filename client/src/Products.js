import React from 'react';

 const Products = () => {
    return (
      <section id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Products & Services</h2>
              <h3 class="section-subheading text-muted">Check out our current dragons, services and accessories below:</h3>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                <i class="fab fa-d-and-d fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="service-heading">Dragons</h4>
              <p class="text-muted">We have all your favorite pure-bred racing dragons, as well as companion breeds, and rescues. There's a perfect dragon for every family, our expert staff are trained to help you find the perfect fit. Find your next scaly friend now!</p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-graduation-cap fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="service-heading">Training</h4>
              <p class="text-muted">Got a rowdy dragon at home? Is your little cave boy teaching your dragon bad habits? Our trainers can help tame even the wildest Hungarian Horntail! We'll give you the tools and strategies to keep your flamebreathing friend happy and healthy!</p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-fire-extinguisher fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="service-heading">Accessories</h4>
              <p class="text-muted">Raising a dragon can be a full-time job. We have everything you need to prepare for your latest addition to the family. Scale brushes, racing saddles, fire extinguishers, we've got it all!</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Products;
