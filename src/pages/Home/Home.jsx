import React from "react";
import Header from "../../components/Header/Header";
import ImagePanel from "../../components/ImagePanel/ImagePanel";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <ImagePanel />
      <Footer />
    </div>
  );
};

export default Home;
