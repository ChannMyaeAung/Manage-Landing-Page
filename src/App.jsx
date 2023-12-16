import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

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
