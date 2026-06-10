import { Heart } from "lucide-react";
import { Link } from "react-router";
import {
  useAddToFav,
  useAddToFavDispatch,
} from "../context/add-to-fav-context";

export default function CardProduct({
  id,
  children,
  category,
  price,
  imgCard,
}) {
  const favDispatch = useAddToFavDispatch();
  const { fav } = useAddToFav();
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
    <div className="card">
      <div className="card-header">
        <div className="tagline">
          <p>{category}</p>
        </div>

        <img className="card-img" src={imgCard} alt="" />
      </div>

      <div className="card-body">
        <div className="body-1">
          <Link className="title" to={`/product/${id}`}>
            {children}
          </Link>

          <Heart
            onClick={handleFav}
            className={`fav-icon ${isFav ? "active" : ""}`}
          />
        </div>

        <h5 className="price">{price}</h5>
      </div>
    </div>
  );
}
