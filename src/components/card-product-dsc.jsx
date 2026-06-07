import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function CardProductDsc({
  id,
  children,
  dscBadge,
  imgDisc,
  oriPrice,
  dscPrice,
}) {
  const [isFav, setIsFav] = useState(false);

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
            onClick={() => setIsFav(!isFav)}
            className={`fav-icon ${isFav ? "active" : ""}`}
          />
        </div>
        <div className="price-wrapper">
          {/* <div className="group1"> */}
          <h5 className="ori-price">{oriPrice}</h5>
          {/* </div> */}

          <p className="disc-price">{dscPrice} </p>

          {/* <button> <ShoppingCartIcon className="shopping-icon-add"/> add to cart</button> */}
        </div>
      </div>
    </div>
  );
}
