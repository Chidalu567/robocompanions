import React from "react";
import { useEffect, useState, useCallback } from "react";
import Top from "../Top";

import Helmet from "react-helmet";
import "./styles.css";

const User = ({ match }) => {
	const [items, setItems] = useState({});
	const getUser = useCallback(async () => {
		const fetchitem = await fetch(
			`https://jsonplaceholder.typicode.com/users/${match.params.id}`
		);
		const iteg = await fetchitem.json();
		setItems(iteg);
	}, [match.params.id]);

	useEffect(() => {
		getUser();
	}, [getUser]);

	return (
		<React.Fragment>
			<div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>{items.name}</title>
					<link rel="canonical" href="http://mysite.com/example" />
				</Helmet>
				<Top />
				<div className="text-center row">
					<div
						style={{ width: "500px", height: "auto" }}
						className="mt-2 text-center card"
					>
						<img
							src={`https://robohash.org/${
								items.name + items.id + items.email
							}`}
							alt={items.name}
							className="card-img-top"
						/>
						<div className="card-body">
							<h5 className="card-title">{items.name}</h5>
						</div>
						<div className="card-footer">
							<strong>Email</strong> : {items.email}
						</div>
						<strong>Website</strong> : {items.website}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default User;
