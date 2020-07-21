import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import ImagePanel from "../../components/ImagePanel/ImagePanel";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <ImagePanel />
      <Footer />
    </div>
  );
};

export default Home;
