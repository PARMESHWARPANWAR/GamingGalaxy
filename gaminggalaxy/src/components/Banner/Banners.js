import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/firebase";
import Banner from "./Banner";

function Banners() {
    const [user,setUser] = useState("Parmeshwar");
    const [tournaments, loading, error] = useCollection(db.collection("Tournaments").doc(
      "UpcomingMatches").collection("pubg"));
  
     function joinTournament(id){
      db.collection("Tournaments").doc(
        "UpcomingMatches").collection("pubg").doc(id).collection("Players").doc(user).set({
          name : user,
        })
     }
    
    if(loading){
      return <h1>Loading...</h1>;
    }

  return <div>
      {tournaments?.docs.map((doc) =>(
      doc.data().public?
        <Banner 
        key={doc.id}
        id = {doc.id}
        title = {doc.data().title}
        time = {doc.data().time}
        date = {doc.data().date}
        timestamp = {doc.data().timestamp}
        banner={doc.data().banner}
        description = {doc.data().description}
        joinTournaments = {joinTournament}/>
      :(<></>)
      ))}
  </div>;
}

export default Banners;
