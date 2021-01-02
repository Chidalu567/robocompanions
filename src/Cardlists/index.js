import React, { useEffect, useState, useCallback } from "react";
import Card from "../Card";
import Search from "../Search";
import "./styles.css";
import Helmet from "react-helmet";

const Cardlists = (props) => {
	useEffect(() => {
		getRobots();
	}, []);
	const [robots, setRobots] = useState([]);
	const [filteredRobots, setFilteredRobots] = useState(robots);
	const getRobots = useCallback(async () => {
		const fetchitem = await fetch(
			`https://jsonplaceholder.typicode.com/users`
		);
		const iteg = await fetchitem.json();
		setRobots(iteg);
		setFilteredRobots(iteg);
	}, []);

	const onchange = (e) => {
		const filter = robots.filter((d) => {
			return d.name.toLowerCase().includes(e.target.value.toLowerCase());
		});
		setFilteredRobots(filter);
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>ROBO COMPANIONS</title>
			</Helmet>
			<Search onchange={onchange} />
			<div className="text-center row" style={{ marginTop: "70px" }}>
				{filteredRobots.length ? (
					filteredRobots.map((data) => (
						<Card
							key={data.id}
							name={data.name}
							id={data.id}
							imageLink={data.name + data.id + data.email}
						/>
					))
				) : (
					<p
						className="text-center display-1 mt-5"
						style={{
							marginLeft: "auto",
							marginRight: "auto",
							marginTop: "auto",
							marginBottom: "auto",
						}}
					>
						NO ROBOTS FOUND
					</p>
				)}
			</div>
		</React.Fragment>
	);
};

export default Cardlists;
