import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Card = ({ imageLink, name, id }) => {
    return (
        <React.Fragment>
            <div className="mt-2 text-center card">
                <img
                    src={`https://robohash.org/${imageLink}`}
                    alt={name}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <div className="card-footer">
                    <Link to={`/${id}`}>
                        <button className="btn btn-primary">
                            VIEW DETAILS
                        </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Card;
