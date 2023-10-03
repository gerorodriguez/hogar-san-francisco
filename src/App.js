import "./App.css";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousels from "./components/carousel/Carousels";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousels />
    </div>
  );
}

export default App;
