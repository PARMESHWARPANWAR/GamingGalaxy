import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/firebase";
import Banner from "../Banner/Banner";

function HomeScreen() {
  const [tournaments, loading, error] = useCollection(db.collection("Tournaments").doc(
    "R2rhHCOLaTmLxfACo2f0").collection("pubg"));
  tournaments?.docs.map((doc) =>{
    console.log(doc.data().name);
  })

  if(loading){
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {tournaments?.docs.map((doc) =>(
        <Banner 
        key={doc.id}
        id = {doc.id}
        title = {doc.data().name}/>
      ))}
    </div>
  );
}

export default HomeScreen;