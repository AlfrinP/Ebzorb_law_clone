import React from "react";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import FeaturePages from "./components/FeaturePages";
import BookPage from "./components/BookPage";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Uniqueness from "./components/Uniqueness";
import Footer from "./components/Footer";
import Bottombar from "./components/Bottombar";
import WhyUs from "./components/WhyUs";
import Latest from "./components/Latest";


function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <FeaturePages />
      <BookPage />
      <Latest />
      <Plans />
      <Testimonials />
      <Uniqueness />
      <WhyUs />
      <Footer />
      <Bottombar />

    </>
  );
}

export default App;
