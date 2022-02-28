import React, { useEffect, useState } from "react";
import "../css/Orders.css";
import { db } from "../js/firebase";
import JoinedTournament from "./JoinedTournament";

function JoinedTournaments() {
  const [user, setUser] = useState(null);
  const [tournaments, loading, error] = useCollection(
    db
      .collection("users")
      .doc(user?.uid)
      .collection("tournaments")
      .where("public", "==", true)
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);


  // history.replace("/tournaments");

  //const greater = new Date(element.get('expire') as admin.firestore.Timestamp) > new Date();
  //const lower = new Date(element.get('expire') as admin.firestore.Timestamp) < new Date();
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {tournaments?.docs.map((doc) => (
        <JoinedTournament
          // user = {user}
          key={doc.id}
          id={doc.id}
          title={doc.data().title}
          time={doc.data().time}
          date={doc.data().date}
          maxPlayers={doc.data().maxPlayers}
          teamPlayer={doc.data().teamPlayer}
          state={doc.data().public}
          timestamp={doc.data().timestamp}
          banner={doc.data().banner}
          description={doc.data().description}
          joinTournaments={joinTournament}
        />
      ))}
    </div>
  );
}

export default JoinedTournaments;
