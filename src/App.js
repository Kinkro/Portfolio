import React, { useEffect, useState, useRef } from "react";
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
  const userName = "kinkro";
  const url = `https://api.github.com/users/${userName}/repos`;
  const [data, setData] = useState(null);
  const dataRef = useRef(false);

  useEffect(() => {
    if (!dataRef.current) {
      fetch(url, {
        headers: {
          Authorization:
            "token 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",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Extract the necessary information and use it to display on your portfolio website
          // data.forEach((repo) => {
          //   console.log(repo);
          // });
          setData(data);
          dataRef.current = true;
        });
    }
  }, [url]);
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio data={data} />
        <Contacts />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
