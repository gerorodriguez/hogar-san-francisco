import "./App.css";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousels from "./components/carousel/Carousels";
import ContentBody from "./components/content-body/ContentBody";
import Section from "./components/sections/Section";
import Footer from "./components/footer/Footer";
import CarouselWords from "./components/carousel/CarouselWords";
import Services from "./components/sections/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousels />
      <ContentBody />
      <Section />
      <Services />
      <CarouselWords />
      <Footer />
    </div>
  );
}

export default App;
