import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "../Slider/Slider";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Song.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color: "white" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Song() {
  const [value, setValue] = React.useState(0);
  const [albums, setAlbums] = useState([]);
  const [categoryData, setCategoryData] = useState({
    rock: null,
    pop: null,
    blues: null,
    razz: null,
  });

  const functionFetchSongs = async () => {
    try {
      let URL = "https://qtify-backend-labs.crio.do/songs";
      let response = await axios.get(URL);
      setAlbums(response.data);
    } catch (err) {
      console.error("Error fetching top albums:", err);
    }
  };

  useEffect(() => {
    functionFetchSongs();
  });

  useEffect(() => {
    if (albums.length > 0) {
      categorizeAlbums(albums);
    }
  }, [albums]);

  const categorizeAlbums = (allSongs) => {
    const categorizedData = {
      rock: allSongs.filter((elem) => elem.genre.key === "rock"),
      pop: allSongs.filter((elem) => elem.genre.key === "pop"),
      blues: allSongs.filter((elem) => elem.genre.key === "blues"),
      jazz: allSongs.filter((elem) => elem.genre.key === "jazz"),
    };

    setCategoryData(categorizedData);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="text2-color">Songs</div>
      <Box sx={{ width: "100%", color: "white" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Rock" {...a11yProps(1)} />
            <Tab label="Pop" {...a11yProps(2)} />
            <Tab label="Jazz" {...a11yProps(3)} />
            <Tab label="Blues" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Slider data1={albums} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Slider data1={categoryData.rock} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Slider data1={categoryData.pop} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Slider data1={categoryData.jazz} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Slider data1={categoryData.blues} />
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default Song;
