import { Minus, MinusIcon, PlusIcon, SquareCheck, Trash2 } from "lucide-react";
import { useState } from "react";

export default function CardCart({
  children,
  category,
  cardImg,
  sizeCart,
  priceCart,
}) {
  // hooks
  // useState
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="card-body-cart">
      <div className="left-cart">
        <SquareCheck className="checkbox-cart" />
      </div>
      <div className="second-cart">
        <div className="picture-cart">
          <div className="tagline-cart">{category}</div>
          <img className="card-img-cart" src={cardImg} alt="" />
        </div>
      </div>
      <div className="third-cart">
        <div className="title-cart">
          <p>{children}</p>
        </div>
        <div className="size-cart">
          <p>{sizeCart}</p>
        </div>
        {/* <div className="qty-cart">
          <p>{qtyCart}</p>
        </div> */}
        <div className="plusmin-content">
          <button className="btn-left" onClick={handleMinus}>
            <MinusIcon className="minus-cart" />
          </button>
          <input className="plusmin-fill" type="number" value={count}></input>
          <button className="btn-right" onClick={handlePlus}>
            <PlusIcon className="plus-cart" />
          </button>
        </div>
      </div>
      <div className="right-cart">
        <Trash2 className="trash-icon" />
        <div className="price-cart">{priceCart}</div>
      </div>
    </div>
  );
}
