import Navbar from "./Component/Navbar/Navbar";
import HeroImage from "./Component/HeroImage/HeroImage";
import "./App.css";
import Section from "./Component/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const functionTopApi = async () => {
    let URL = "https://qtify-backend-labs.crio.do/albums/top";
    let response = await axios.get(URL);
    setTopAlbums(response.data);
  };

  const functionNewApi = async () => {
    let URL = "https://qtify-backend-labs.crio.do/albums/new";
    let response = await axios.get(URL);
    setNewAlbums(response.data);
  };

  useEffect(() => {
    functionTopApi();
    functionNewApi();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="heroimage ">
        <HeroImage />
      </div>
      <Section text="Top Albums" data={topAlbums} />
      <Section text="New Albums" data={newAlbums} />
    </div>
  );
}

export default App;
