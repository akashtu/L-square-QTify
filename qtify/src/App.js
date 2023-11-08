import Navbar from "./Component/Navbar/Navbar";
import HeroImage from "./Component/HeroImage/HeroImage";
import Card from "./Component/Card/Card";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="heroimage ">
        <HeroImage />
      </div>
      <Card />
    </div>
  );
}

export default App;
