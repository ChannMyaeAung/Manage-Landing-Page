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
    /* Note - Each section has the padding inline of 4. */
    <div id="App" className="container mx-auto">
      <header>
        <Header />
      </header>

      <main className="flex flex-col gap-10">
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
