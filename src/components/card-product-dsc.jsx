import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useAddToFav, useAddToFavDispatch } from "../context/add-to-fav-context";

export default function CardProductDsc({
  id,
  children,
  dscBadge,
  imgDisc,
  oriPrice,
  dscPrice,
}) {
  const favDispatch = useAddToFavDispatch();
  const {fav} = useAddToFav();
  const isFav = fav.some((item) => item.id === id);

  const handleFav = () => {
    if (!isFav) {
      favDispatch({
        type: "ADD_TO_FAV",
        payload: {
          fav: {
            id: id,
          },
        },
      });
    } else {
      favDispatch({
        type: "REMOVE_FROM_FAV",
        payload: {
          id: id,
        },
      });
    }
  };

  return (
    <div className="card-disc">
      <div className="card-header">
        <div className="disc-badge">{dscBadge}</div>
        <img className="img-card-disc" src={imgDisc} alt="" />
        {/* <div className="tagline">
          <p>{category}</p>
        </div> */}
      </div>
      <div className="card-body">
        <div className="group-1">
          <Link className="title" to={`/product/${id}`}>
            {children}
          </Link>
          <Heart
            onClick={handleFav}
            className={`fav-icon ${isFav ? "active" : ""}`}
          />
        </div>
        <div className="price-wrapper">
          <h5 className="ori-price">{oriPrice}</h5>
        

          <p className="disc-price">{dscPrice} </p>

          </div>
      </div>
    </div>
  );
}
