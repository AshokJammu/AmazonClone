import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="124"
          title="The Lean Startup: How constant innovations"
          price={15.05}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019._UY630_SR1200,630_.jpg"
        />

        <Product
          id="12455"
          title="The Lean Startup: How constant innovations"
          price={15.05}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019._UY630_SR1200,630_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="24455"
          title="The Lean Startup: How constant innovations"
          price={15.05}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019._UY630_SR1200,630_.jpg"
        />
        <Product
          id="124955"
          title="The Lean Startup: How constant innovations"
          price={15.05}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019._UY630_SR1200,630_.jpg"
        />
        <Product
          id="124055"
          title="The Lean Startup: How constant innovations"
          price={15.05}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019._UY630_SR1200,630_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="124855"
          title="The Lean Startup: How constant innovations"
          price={15.05}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019._UY630_SR1200,630_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
