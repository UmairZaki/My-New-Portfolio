import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/about.jpg';
const IndexPage = () => (
  <Layout activeLink="about">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5 a">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper ">
                    My
                  </span>
                  <span className="section-heading-lower">Skills</span>
                </h2>
                <p>
                 I have working Experience in following technologies:
                </p>
                <ul>
                  <li>Python</li>
                  <li>Numpy</li>
                  <li>Matplotlib</li>
                  <li>Pandas</li>
                  <li>Neural Network</li>
                  <li>Deep Learning</li>
                  <li>Tensorflow</li>
                  <li>Keras</li>
                  <li>Scikit Learn</li>
                  <li>Artificial Intelligence</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Saas</li>
                  <li>React</li>
                  <li>Java Script</li>
                  <li>Gatsby</li>
                  <li>NPM</li>
                  <li>NodeJS</li>
                  <li>Flask</li>
                  <li>Terrafoam</li>
                  <li>Windows</li>
                  <li>Ubuntu</li>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Jupyter Notebook</li>
                  <li>Visual Studio</li>
                  <li>GraphQl</li>
                  <li>MongoDB</li>
                  <li>Postman</li>
                  <li>MySQL</li>
                  <li>Rust</li>
                  <li>Lean Startup</li>
                  <li>Agile</li>
                  <li>DevOps</li>
                  <li>Design Thinking</li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
