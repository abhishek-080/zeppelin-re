import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Albums from "./components/Albums";
import Legends from "./components/Legends";

function App() {
  
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Home />
        <Legends />
        <About/>
        <Albums />
      </div>
    </div>
  );
}

export default App;
