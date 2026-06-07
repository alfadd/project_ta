import { Heart } from "lucide-react";
import { useNavigate } from "react-router";

export default function CardFav({children, category, imgCard, price}) {
    // const [isFav, setIsFav] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="card" onClick={() => navigate("/product")}>
      <div className="card-header">
        <div className="tagline">
          <p>{category}</p>
        </div>
        <img className="card-img" src={imgCard} alt="" />
      </div>
      <div className="card-body">
        <div className="body-1">
        <h5 className="title">{children}</h5>
        {/* <Heart 
        onClick={() => setIsFav(!isFav)}
        className={`fav-icon ${isFav ? "active" : ""}`} /> */}
        <Heart className="fav-icon" />
        </div>
        <h5 className="price">{price}</h5>
        </div>
    </div>
    )
}