import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export const Card = ({ item, resource }) => {
    const { store, actions } = useContext(Context);

    const [like, setLike] = useState(
        store.list.some((fav) => fav.uid === item.uid)
    );

    const handleClick = () => {
        if (like) {
            const updatedFavorites = store.list.filter((fav) => fav.uid !== item.uid);
            actions.deleteFavorite(updatedFavorites);
        } else {
            actions.getFavorites(resource, item.uid);
        }
        setLike(!like); 
    };

    return (
        <Link to={`/${resource}/${item.uid}`} className="custom-card-link">
            <div className="custom-card my-4 mx-3">
                <img
                    src={
                        resource === "planets" && item.uid === "1"
                            ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png/"
                            : `https://starwars-visualguide.com/assets/img/${
                                  resource === "people" ? "characters" : resource
                              }/${item.uid}.jpg`
                    }
                    className="custom-card-img-top"
                    alt={item.name}
                />
                <div className="card-body bg-dark">
                    <h3 className="card-title font-weight-bold text-white py-2">{item.name}</h3>
                    <div className="d-flex justify-content-between">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick();
                            }}
                            className="btn btn-transparent"
                            style={{ border: "none", padding: "0", background: "none" }}
                        >
                            <FontAwesomeIcon
                                icon={like ? solidHeart : regularHeart}
                                style={{ color: like ? "#FFC107" : "gray", fontSize: "24px" }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    item: PropTypes.object.isRequired,
    resource: PropTypes.string.isRequired,
};
