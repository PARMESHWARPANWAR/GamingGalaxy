import React, { useEffect, useState } from "react";
import "./Banner.css";
import { db } from "../../firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function Banner({
  user,
  key,
  banner,
  title,
  id,
  date,
  joinedTournaments,
  time,
  maxPlayers,
  teamPlayer,
  state,
  timestamp,
  description,
  joinTournaments,
}) {

  const [joined, setJoined] = useState(false);
  const [processing, setProcessing] = useState("");
  const [tournaments, loading, error] = useCollection(
    db.collection("users").doc(user).collection("tournaments")
  );


  useEffect(() => {
    tournaments?.docs.map((doc) =>{
      if(doc.id == id){
        setJoined(true);
      }
    })

  }, [tournaments]);

  function join() {
    if (joined) return;
    joinTournaments(
      id,
      banner,
      date,
      description,
      maxPlayers,
      state,
      teamPlayer
    );
    setJoined(true);
  }
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  // Two functions;

  // if tournament id present in player tournament list the true join;
  //if joined  true will not work else add tournament to player tournament list here
  // className={joined?"joined-button" : }
  // className="banner_button" 
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
        <h1 className="banner_title">{title}</h1>
        <div className="banner_buttons">
          <button className={joined?"banner_joined_button" :"banner_button"} onClick={() => join()}>
            {joined ? "Joined" : "Join Now"}
          </button>
        </div>
        <h1 className="banner_description">{truncate(description, 150)}</h1>
        <h1>{time}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}
export default Banner;
