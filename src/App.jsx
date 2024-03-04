import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import GetStarted from "./components/getstarted/GetStarted";
import Footer from "./components/footer/Footer";

function App() {
  return (
    /* Note - Each section has the padding inline of 4. */
    <div id="App" className="overflow-hidden antialiased">
      <header className="container mx-auto">
        <Header />
      </header>

      <main className="container flex flex-col gap-10 mx-auto ">
        <Hero />
        <Services />
        <Testimonials />
      </main>

      <footer>
        <GetStarted />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
