import { useNavigate } from "react-router";

export default function CardHistoryOrder({
  children,
  arrivedDate,
  tagline,
  imgHistory,
  qtyCard,
  sizeCard,
  price,
  orderId,
}) {
  const navigate = useNavigate();
  return (
    <div className="card-body-history">
      <div className="side-top">
        <div className="group-left">
          <p className="p1">Perkiraan Tiba : </p>
          <p className="p2">{arrivedDate}</p>
        </div>
        <div className="tagline-card">
          <p>{tagline}</p>
        </div>
      </div>
      <div className="side-bottom">
        <div className="first-side">
          <div className="picture-card">
            <img className="card-img-checkout" src={imgHistory} alt="" />
          </div>
        </div>
        <div className="second-side">
          <div className="group-1">
            <p className="title-card">{children}</p>
            <p className="qty-card">{qtyCard}</p>
          </div>
          <div className="group-2">
            <p className="size-card">{sizeCard}</p>
            <p className="price">{price}</p>
          </div>
          <div className="group-3">
            <div className="order-id">
              <p className="p1">Order ID : </p>
              <p className="p2">{orderId}</p>
            </div>
            <button onClick={() => navigate("/detailOrder")} className="detail-btn">Detail Order</button>
          </div>
        </div>
      </div>
    </div>
  );
} 