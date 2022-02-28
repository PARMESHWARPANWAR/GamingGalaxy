import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db, firebase } from "../../firebase/firebase";
import Loading from "../HomePage/Loading";
import Banner from "./Banner";
// import firebase from "firebase";

function Banners() {
    const [user, setUser] = useState(null); 
    const [tournaments, loading, error] = useCollection(db.collection("Tournaments").doc(
      "UpcomingMatches").collection("pubg").where("public", "==",true));
      // where("public","==",true));
    
    
  
      // const greater = new Date(element.get('expire') as admin.firestore.Timestamp) > new Date();
      // const lower = new Date(element.get('expire') as admin.firestore.Timestamp) < new Date();
      //&& "expire".date <=  new Date())

    useEffect(()=> {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if(user) {
          setUser(user); 
        } else {
          setUser(null);
        }
      });
  
      return unsubscribe;
    }, []);
    
    function joinTournament(id ,banner,date,description,maxPlayers,state,teamPlayer){
      //Add Tournaments to player Tournaments list;//Add Tournaments to player Tournaments list;

      db.collection("users")
      .doc(user?.uid)
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
        "UpcomingMatches").collection("pubg").doc(id).collection("Players").doc(user?.uid).set({
          name :"ProfileName",
        })
    }
    
    // history.replace("/tournaments");

    if(loading){
      return <Loading />;
  }

  return <div>
      {tournaments?.docs.map((doc) =>(
        doc.data().expire.toDate() >= new Date()?
        <Banner 
        // user = {user}
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
        : <></>
      ))}
  </div>;
}

// const startOfDay = new Date();
// startOfDay.setHours(0, 0, 0, 0);
// const db = firebase.firestore();
// db.collection('posts').where('createdAt', '>=', startOfDay)
// .get()
// .then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//         console.log(doc.id, " -> ", doc.data());
//     });
// });

export default Banners;
