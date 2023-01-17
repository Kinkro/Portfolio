import React from "react";
import "./App.css";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contacts />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
