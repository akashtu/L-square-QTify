import Navbar from "./Component/Navbar/Navbar";
import HeroImage from "./Component/HeroImage/HeroImage";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="heroimage">
        <HeroImage />
      </div>
    </div>
  );
}

export default App;
