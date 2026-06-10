import { Minus, MinusIcon, PlusIcon, SquareCheck, Trash2, Type } from "lucide-react";
import { useState } from "react";
import { useAddToCartDispatch } from "../hooks/useAddToCardDispatch";

export default function CardCart({
  productId,
  children,
  category,
  cardImg,
  sizeCart,
  qtyCart,
  priceCart,
  color,
}) {
  
  // const [count, setCount] = useState(0);

  // function handlePlus() {
  //   setCount(count + 1);
  // }

  // function handleMinus() {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // }

  const dispatch = useAddToCartDispatch();

  return (
    <div className="card-body-cart">
      
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
          <p>{sizeCart}, {color}</p>
        </div>
        <div className="qty-cart">
          <p>{qtyCart}</p>
        </div>
        {/* <div className="plusmin-content">
          <button className="btn-left" onClick={handleMinus}>
            <MinusIcon className="minus-cart" />
          </button>
          <input className="plusmin-fill" type="number" value={count}></input>
          <button className="btn-right" onClick={handlePlus}>
            <PlusIcon className="plus-cart" />
          </button>
        </div> */}
      </div>
      <div className="right-cart">
        <Trash2 className="trash-icon" 
        onClick={() => {
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
              cart: {
                id: productId,
                size: sizeCart,
                color: color,
              },
            },
          });
        }}/>
        <div className="price-cart">{priceCart}</div>
      </div>
    </div>
  );
}
