import React from "react";
import "../css/Order.css";

function JoinedTournament({
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
	const [user, setUser] = useState(null);

	const [joined, setJoined] = useState(false);
	const [processing, setProcessing] = useState("");
	const [tournaments, loading, error] = useCollection(
	  db.collection("users").doc(user?.uid).collection("tournaments")
	);
    
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
          <button
            className={joined ? "banner_joined_button" : "banner_button"}
            onClick={() => join()}
          >
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

export default JoinedTournament;

// import React from 'react'

// function JoinedTournament() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default JoinedTournament
