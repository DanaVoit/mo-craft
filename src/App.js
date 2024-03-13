
import './App.scss';
import Navbar from './components/Navbar';
import About from './components/About';
import Catalog from './components/Сatalog';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <About/>
        <Catalog/>
        <Footer/>
    </div>
  );
}

export default App;
