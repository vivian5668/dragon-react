import React from 'react';

 const Team = () => {
    return (

      <section className="bg-light" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="img/team/chelsea.jpeg" alt=""/>
                <h4>Chelsea Zhu</h4>
                <p className="text-muted">Developer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://github.com/vivian5668">
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/chelsea-qianwei-zhu">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="img/team/scott.jpeg" alt=""/>
                <h4>Scott Molsness</h4>
                <p className="text-muted">Developer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://github.com/smolsn13">
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/scottmolsness">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="img/team/toothless1.png" alt=""/>
                <h4>Toothless</h4>
                <p className="text-muted">Company Mascot</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
            </div>
          </div>
        </div>
      </section>
    )
  }

export default Team;
