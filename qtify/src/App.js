import Navbar from "./Component/Navbar/Navbar";
import HeroImage from "./Component/HeroImage/HeroImage";
import "./App.css";
import Section from "./Component/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import Song from "./Component/Song/Song";
import BasicAccordion from "./Component/Accordion/BasicAccordion";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [totalSongs, setTotalSongs] = useState(null);
  // const [songs, setSongs] = useState([]);

  const functionTopApi = async () => {
    let URL = "https://qtify-backend-labs.crio.do/albums/top";
    let response = await axios.get(URL);
    setTopAlbums(response.data);
    setTotalSongs(response.data.songs.length);
  };

  const functionNewApi = async () => {
    let URL = "https://qtify-backend-labs.crio.do/albums/new";
    let response = await axios.get(URL);
    setNewAlbums(response.data);
  };

  // const functionNewSongs = async () => {
  //   let URL = "https://qtify-backend-labs.crio.do/songs";
  //   let response = await axios.get(URL);
  //   setSongs(response.data);
  // };

  useEffect(() => {
    functionTopApi();
    functionNewApi();
    // functionNewSongs();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="heroimage ">
        <HeroImage />
      </div>
      <Section text="Top Albums" data={topAlbums} />
      <Section text="New Albums" data={newAlbums} />
      <div className="song-container">
        <Song />
      </div>
      <BasicAccordion />
    </div>
  );
}

export default App;
