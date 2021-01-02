import React from "react";

import "./styles.css";

const Search = (props) => {
	return (
		<React.Fragment>
			<div className="form py-3  bg-primary text-center">
				<input
					onChange={props.onchange}
					style={{ textAlign: "center" }}
					type="text"
					placeholder="SEARCH ROBOTS"
					className="form-control"
				/>
			</div>
		</React.Fragment>
	);
};

export default Search;
