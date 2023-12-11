import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/HEro";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Header />
        </nav>
      </header>

      <main>
        <Hero />
        <Services />
        <Testimonials />
        <GetStarted />
        <Footer />
      </main>
    </div>
  );
}

export default App;
