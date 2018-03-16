import React from 'react';

 const About = () => {
    return (

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About Dragons 'R Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2000 BC</h4>
                      <h4 className="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">We began as a small startup in a little hole in a rock in 2000 BC. Dragons had long been our main source of transportation and companionship, so we decided to open a store devoted to the adoption of these lovable, terrifying creatures.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/cavefolk.jpeg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>1998 BC</h4>
                      <h4 className="subheading">First Training Classes Offered</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">After two years of helping match cavefolk with companion dragons, we began offering training classes to help tame those with a wilder side. After a few singed unibrows and burnt loincloths, our trainers learned proper methods for handling these adorable monsters.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/caveman.jpeg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>1997 BC</h4>
                      <h4 className="subheading">Accessories Hit the Site</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">We finally added accessories to the store, allowing cavedwellers to purchase their own dragon gear and grooming products. We developed our own line of fire extinguisher that will put out even the hottest flame within one hour!</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/stocks.jpeg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>1995 BC</h4>
                      <h4 className="subheading">Dragons 'R Us Goes Public!</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">After 5 years, we started trading shares on the shell market. Listed as DRU on the New York Stock Exchange.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h5>Join our mailing
                      <br>list for the</br>
                      <br>latest updates!</br>
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }

export default About;
