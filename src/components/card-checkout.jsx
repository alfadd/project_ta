

export default function CardCheckout({children, imgCheckout, sizeCheckout, qtyCheckout, categoryCheckout, priceCheckout, color}) {
  return (
    <div className="card-body-checkout">
      <div className="first-side">
        <div className="picture-card">
          <img className="card-img-checkout" src={imgCheckout} alt="" />
        </div>
      </div>
      <div className="second-side">
        <p className="title-card">{children}</p>
        <p className="size-card">{sizeCheckout}, {color}</p>
        <p className="qty-card">{qtyCheckout}</p>
      </div>
      <div className="third-side">
        <div className="tagline-card">
          <p>{categoryCheckout}</p>
        </div>
        <div className="price-card">
          <p>{priceCheckout}</p>
        </div>
      </div>
    </div>
  );
}
