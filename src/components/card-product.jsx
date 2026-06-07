import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

export default function CardProduct({
  id,
  children,
  category,
  price,
  imgCard,
}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {}, [id]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  }

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
            onClick={handleFavorite}
            className={`fav-icon ${isFav ? "active" : ""}`}
          />
        </div>

        <h5 className="price">{price}</h5>
      </div>
    </div>
  );
}
