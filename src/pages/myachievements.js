import React from 'react';

import Layout from '../components/Layout';

import product1 from '../assets/images/products-01.jpg';
import product2 from '../assets/images/products-02.jpg';


const IndexPage = () => (
  <Layout activeLink="products">
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                Microsoft Technology Associate
                </span>
                <span className="section-heading-lower">
                Introduction to Programming<br /> using Python
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product1}
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
              I had passed the Microsoft Technology Associate Certificate (MTA-98-381) Introduction to programming using Python with 89% marks on August 23, 2019.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                Coursera Certificate
                </span>
                <span className="section-heading-lower">
                AI For Everyone<br /> deeplearning.ai
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product2}
            alt=""
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
              I had passed the Corsera Certificate (deeplearning.ai) AI For Everyone with 93% marks on July 12, 2019. Verify at coursera.org/verify/YHQEDEGRL7QH Coursera has confirmed the identity of this individual and their participation in the course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  </Layout>
);

export default IndexPage;
