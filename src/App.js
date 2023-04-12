import Nav from "./components/nav/Nav";
import Product from "./components/product/Product";
import Modal from "./components/modal/Modal";
import Slider from "./components/slider/Slider";
function App() {


  return (
    <div className="App">
     
      <Modal></Modal>
      <Nav></Nav>
      <main>
      <Product></Product>
      </main>
     
      
    </div>
  );
}

export default App;
