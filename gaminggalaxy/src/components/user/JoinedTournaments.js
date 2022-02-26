import React, { useEffect, useState } from "react";
import "../css/Orders.css";
import { db } from "../js/firebase";
import { useStateValue } from "../stateProvider";
import Order from "./Order";

function JoinedTournaments() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [tournaments, setTournaments] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("tournaments")
				.orderBy("created", "desc")   // sort by created time    
				.onSnapshot((snapshot) =>
					setTournaments(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setTournaments([]);
		}
	}, [user]);

	return (
		<div className="joined_tournaments">
			<div className="joined_tournaments__container">
				<div className="joined_tournaments__title">
					<h3>Your Tournaments</h3>
				</div>

				<div className="joined_tournaments__tournaments">

					{orders.length === 0 && (
						<div className="checkout__main">
							<img
								className="checkout__image"
								src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
							/>
							<h3 className="checkout__emptyCart">You have no Tournaments</h3>
						</div>
					)}

					{tournaments?.map((tournament) => (
						<Order tournament={tournament} />
					))}
				</div>
			</div>
		</div>
	);
}

export default JoinedTournaments;


