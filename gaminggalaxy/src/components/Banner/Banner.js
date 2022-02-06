import React from "react";

function Banner({ banner, title, id, time, description }) {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: cover,
        backgroundImage: `url(banner)`,
        backgroundPosition: "center center",
      }}
    >
    <div className="banner_contents">
      <h1 className="banner_title">
        {title}
      </h1>
      <div className="banner_buttons">
        <button className="banner_button">Join Now</button>
      </div>
      <h1 className="banner_description">
        {truncate(description,150)}
      </h1>
    </div>
    <div className="banner_fadeBottom" />
    </header>
  );
}
export default Banner;

return (
  <header
    className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center",
    }}
  >
    <div className="banner_contents">
      <h1 className="banner_title">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>
      <h1 className="banner_description" style={{ color: "white" }}>
        {truncate(movie?.overview, 150)}
      </h1>
    </div>
    <div className="banner_fadeBottom" />
  </header>
);
