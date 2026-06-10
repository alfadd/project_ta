import {
  Heart,
  MinusIcon,
  PlusIcon,
  ShoppingCart
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../../assets/style/product/detailProduct.css";
import ColorPicker from "../../components/color-pick";
import { useAddToFav, useAddToFavDispatch } from "../../context/add-to-fav-context";
import { useAddToCartDispatch } from "../../hooks/useAddToCardDispatch";
import MainLayout from "../../layouts/main-layout";

export default function DetailProduct() {
  const [count, setCount] = useState(1);
  const [detailProduct, setDetailProduct] = useState({});
  const params = useParams();
  const productId = Number(params.id);
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedColorKey, setSelectedColorKey] = useState("");
  const dispatch = useAddToCartDispatch();

  const favDispatch = useAddToFavDispatch();
  const { fav } = useAddToFav();
  const isFav = fav.some((item) => item.id === detailProduct.id);

  const handleFav = () => {
    if (!isFav) {
      favDispatch({
        type: "ADD_TO_FAV",
        payload: {
          fav: {
          id: detailProduct.id,
        },
      },
    });
    } else {
      favDispatch({
        type: "REMOVE_FROM_FAV",
        payload: {
          id: detailProduct.id,
        },
      });
    }
  };

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

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

  useEffect(() => {
    if (detailProduct?.sizes?.length > 0) {
      setSelectedSize(detailProduct.sizes[0]);
    }

    if (detailProduct?.colors?.length > 0) {
      setSelectedColor(detailProduct.colors[0].color);
      setSelectedColorKey(detailProduct.colors[0].key);
    }
  }, [detailProduct]);

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
                <img src={detailProduct.image} alt="" />
              </div>
              <div className="picture-group">
                <div className="small-picture">
                  <img src={detailProduct.image} alt="" />
                </div>
                <div className="small-picture">
                  <img src={detailProduct.image} alt="" />
                </div>
                <div className="small-picture">
                  <img src={detailProduct.image} alt="" />
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
                    <p className="p1">Rp. {detailProduct.originalPrice?.toLocaleString("id-ID")}</p>{" "}
                    <p className="p2">Rp. {detailProduct.price?.toLocaleString("id-ID")}</p>{" "}
                    <div className="p3">
                      <p>{detailProduct.discount} %</p>
                    </div>
                  </>
                ) : (
                  <p className="p1">Rp. {detailProduct.price?.toLocaleString("id-ID")}</p>
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
                      setSelectedColorKey={setSelectedColorKey}
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
                    className={`size-colomn ${selectedSize === item ? "active" : ""}`}
                    onClick={() => {
                      setSelectedSize(item);
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
              <button
                className="add-btn"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      cart: {
                        id: detailProduct.id,
                        qty: count,
                        size: selectedSize,
                        color: selectedColorKey,
                      },
                    },
                  });
                  setCount(1);
                  navigate("/cart");
                }}
              >
                <ShoppingCart className="add-icon" />
                <p >Add to cart</p>
              </button>
              <div className="detail-favorite">
                {/* <Heart className="icon-favorite" /> */}
                <Heart
                  onClick={handleFav}
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
