import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Top = (props) => {
	return (
		<>
			<div>
				<div className="bg-danger">
					<span>
						<Link to="/">
							<button className="btn btn-primary">
								BACK TO HOME
							</button>
						</Link>
					</span>
				</div>
			</div>
		</>
	);
};

export default Top;
