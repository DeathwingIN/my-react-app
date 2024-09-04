import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Form from "./components/Form";
import Pricelist from "./components/Pricelist";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Portfolio></Portfolio>
      <Why></Why>
      <Testimonials></Testimonials>
      <Pricelist></Pricelist>
      <Form></Form>
      <Footer />
    </>
  );
}

export default App;
