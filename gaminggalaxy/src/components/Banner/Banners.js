import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/firebase";
import Loading from "../HomePage/Loading";
import Banner from "./Banner";

function Banners() {
    const [user,setUser] = useState("Parmeshwar");
    // const [joinedTournaments ,setJoinedTournaments] = useState(); 

    //Todo 
    //Set Username as uid;
    //in game at name add user game id; 
    const [tournaments, loading, error] = useCollection(db.collection("Tournaments").doc(
      "UpcomingMatches").collection("pubg"));
    
    // useEffect(() => {
    //   if(user){
    //     console.log('Set Joined Tournaments 1')
    //     setJoinedTournaments(db.collection("Tournaments"))
    //     console.log('Set Joined Tournaments 2 =>' + joinedTournaments?.length)
    //   }
    // },[joinedTournaments]);  
  
    function joinTournament(id ,banner,date,description,maxPlayers,state,teamPlayer){
      //Add Tournaments to player Tournaments list;//Add Tournaments to player Tournaments list;

      db.collection("users")
      .doc(user)
      .collection("tournaments")
      .doc(id)
      .set({
        banner : banner,
        data : date,
        description : description,
        maxPlayers : 100,
        public : state,
        teamPlayer : teamPlayer,
        // timestamp : DateTime.now(),
      });

    db.collection("Tournaments").doc(
        "UpcomingMatches").collection("pubg").doc(id).collection("Players").doc(user).set({
          name : user,
        })
    }

    // history.replace("/tournaments");

    if(loading){
      return <Loading />;
    }

  return <div>
      {tournaments?.docs.map((doc) =>(
      doc.data().public?
        <Banner 
        user = {user}
        key={doc.id}
        id = {doc.id}
        title = {doc.data().title}
        time = {doc.data().time}
        date = {doc.data().date}
        maxPlayers = {(doc.data().maxPlayers)}
        teamPlayer = {doc.data().teamPlayer}
        state = {doc.data().public}
        timestamp = {doc.data().timestamp}
        banner={doc.data().banner}
        description = {doc.data().description}
        joinTournaments = {joinTournament}/>
      :(<></>)
      ))}
  </div>;
}

export default Banners;
