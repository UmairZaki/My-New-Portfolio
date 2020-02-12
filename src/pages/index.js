import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/intro.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-2">
              <span className="section-heading-upper">hi i'm</span>
              <span className="section-heading-lower">Umair Zaki</span>
            </h2>
            <p className="mb-3">
            Web Developer UI - JAMStack<br />
Machine Learning AI Services
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="#cta">
                About me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="cta"  className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">About me</span>
                <span className="section-heading-lower">Objective</span>
              </h2>
              <p className="mb-0">
              Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector. To work a dynamic and challenging environment where I can optimally utilize my professional skills. Hardworking, honest, responsible and aspiring professional seeking as a position member of your team that requires creativity, hard work and multitasking.
              </p>
              <div><h1> </h1></div>
              <h2 className="section-heading mb-4 d">
              <span className="section-heading-upper">My</span>
                <span className="section-heading-lower">Profile</span>
              </h2>
               
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                Father:
                  <span className="ml-auto">Muhammad Zaki</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                CNIC:
                  <span className="ml-auto">42301-6362390-9</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                Date of Birth:
                  <span className="ml-auto">16-July-1989</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                Marital Status:
                  <span className="ml-auto">Single</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                Country:
                  <span className="ml-auto">Pakistan</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                Email:
                  <span className="ml-auto">umairzakicnbc@gmail.com</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                Cell:
                  <span className="ml-auto">03132873668</span>
                </li>
              </ul>
              <h2 className="section-heading mb-4">
              <span className="section-heading-upper">My</span>
                <span className="section-heading-lower">Education</span>
              </h2>
              <p>Matriculation from Bahawalpur Board (Pre-medical Grade "B"2005).</p>
              <p>Intermediate from Karachi Board (Commerce Grade "C" 2010).</p>
              <p>Studying Artificial intelligence, Cloud Native Computing and Internet of Things from Axiom PIAIC Headquarter.</p>
              <h2 className="section-heading mb-4 d">
              <span className="section-heading-upper">My</span>
                <span className="section-heading-lower">Address</span>
              </h2>
              <p className="address mb-5">
                <em>
                  <strong>Plot # 1/29, 4th Floor, Flat # A7,</strong>
                  <br />
                  Block 5b, Nazimabad,<br />
                                              Karachi, Pakistan.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
