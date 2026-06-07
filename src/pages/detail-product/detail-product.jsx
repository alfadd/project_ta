import MainLayout from "../../layouts/main-layout";
import "../../assets/style/product/detailProduct.css";
import {
  CirclePlus,
  Heart,
  MinusIcon,
  PlusIcon,
  ShoppingCart,
  Square,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import cardimg1 from "../../../src/cardimg1.jpg";
import ColorPicker from "../../components/color-pick";
import { useAddToCartDispatch } from "../../hooks/useAddToCardDispatch";
import { useAddToCart } from "../../hooks/useAddToCart";

export default function DetailProduct() {
  const [count, setCount] = useState(0);
  const params = useParams();
  const productId = Number(params.id);

  console.log(productId);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const navigate = useNavigate();

  const [isFav, setIsFav] = useState(false);

  const [isSize, setISize] = useState("");

  const [selectedColor, setSelectedColor] = useState("");

  const [detailProduct, setDetailProduct] = useState({});
  const dispatch = useAddToCartDispatch();
  const {cart} = useAddToCart()

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await fetch("/sampel-data/products.json");
        const response = await res.json();
        setDetailProduct(response.find((item) => item.id === productId));
      } catch {
        console.log("Data gagal diambil");
      }
    };

    getDetail();
  }, [productId]);

  console.log(dispatch);
  console.log(cart)
  return (
    <MainLayout>
      <div className="content-product">
        <div className="product-title">
          <p>Detail Product</p>
        </div>

        <div className="content-body">
          <div className="content-body-left">
            <div className="content-picture">
              <div className="main-picture">
                <img src={cardimg1} alt="" />
              </div>
              <div className="picture-group">
                <div className="small-picture">
                  <img src={cardimg1} alt="" />
                </div>
                <div className="small-picture">
                  <img src={cardimg1} alt="" />
                </div>
                <div className="small-picture">
                  <img src={cardimg1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="content-body-right">
            <div className="group-1">
              <div className="detail-tagline">
                <p>{detailProduct.category}</p>
              </div>
              <div className="stok-1">
                <p>Stok : {detailProduct.stock}</p>
              </div>
            </div>

            <div className="body-title">
              <div className="detail-title">
                <p>{detailProduct.name}</p>
              </div>
              <div className="detail-price">
                {detailProduct.discount ? (
                  <>
                    <p className="p1">Rp {detailProduct.originalPrice}</p>{" "}
                    <p className="p2">Rp {detailProduct.price}</p>{" "}
                    <div className="p3">
                      <p>{detailProduct.discount} %</p>
                    </div>
                  </>
                ) : (
                  <p className="p1">Rp {detailProduct.originalPrice}</p>
                )}
              </div>
            </div>

            <div className="product-pick">
              <div className="color-group">
                {Array.isArray(detailProduct.colors) &&
                  detailProduct.colors.map((item) => (
                    <ColorPicker
                      selectedColor={selectedColor}
                      setSelectedColor={setSelectedColor}
                      color={item.color}
                      colorKey={item.key}
                    />
                  ))}
              </div>
              <div className="detail-wet">
                <p>Wet : {detailProduct.material}</p>
              </div>
            </div>

            <div className="detail-description">
              <p>{detailProduct.description}</p>
            </div>

            <div className="size-title">
              <p>Ukuran</p>
            </div>

            <div className="group-size">
              {Array.isArray(detailProduct.sizes) &&
                detailProduct.sizes.map((item, index) => (
                  <div
                    key={index}
                    className={`size-colomn ${isSize === item ? "active" : ""}`}
                    onClick={() => {
                      setISize(item);
                    }}
                  >
                    {item}
                  </div>
                ))}
            </div>

            <div className="body-bottom">
              <div className="plusmin-content">
                <button className="btn-left" onClick={handleMinus}>
                  <MinusIcon className="minus-cart" />
                </button>
                <input
                  className="plusmin-fill"
                  type="number"
                  value={count}
                ></input>
                <button className="btn-right" onClick={handlePlus}>
                  <PlusIcon className="plus-cart" />
                </button>
              </div>
              <div
                className="add-btn"
                onClick={() => {
                  dispacth({
                    type: "ADD_TO_CART",
                    payload: {
                      cart: {
                        id: detailProduct.id,
                        qty: count,
                      },
                    },
                  });
                }}
              >
                <ShoppingCart className="add-icon" />
                <p>Add to cart</p>
              </div>
              <div className="detail-favorite">
                {/* <Heart className="icon-favorite" /> */}
                <Heart
                  onClick={() => setIsFav(!isFav)}
                  className={`fav-icon ${isFav ? "active" : ""}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
