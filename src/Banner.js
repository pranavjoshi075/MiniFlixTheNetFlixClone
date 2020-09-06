import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const randomSelect = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomSelect]);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner_contents">
        <h1 className="banner_title">{movie.name}</h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{movie.overview}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
