import React, { useState } from "react";
import "./Banner.css";

function Banner({key, banner, title, id,date ,time,timestamp, description, joinTournaments}) {
  const [joined,setJoined] = useState(false);
 
  function join(){
        if(joined) return;
        joinTournaments(id);
        setJoined(true);
  }
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
   
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center center",
      }}
    >
    <div className="banner_contents">
      <h1 className="banner_title">
        {title}
      </h1>
      <div className="banner_buttons">
        <button className="banner_button" onClick = {()=>join()} >{joined? "Joined" : "Join Now" }</button>
      </div>
      <h1 className="banner_description">
        {truncate(description,150)}
      </h1>
      <h1>{time}</h1>
    </div>
    <div className="banner_fadeBottom" />
    </header>
  );
}
export default Banner;