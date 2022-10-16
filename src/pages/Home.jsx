import React from "react";
import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import SliderList from "../components/SliderList/SliderList";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <SliderList />
      <SliderList />
      <SliderList />
    </div>
  );
};

export default Home;
