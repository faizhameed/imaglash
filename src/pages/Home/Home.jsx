import React from "react";
import Header from "../../components/Header/Header";
import ImagePanel from "../../components/ImagePanel/ImagePanel";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <ImagePanel />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
