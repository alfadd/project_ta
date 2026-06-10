import { ChevronLeft, ShoppingCart, Type } from "lucide-react";
import { useNavigate } from "react-router";
import "../../assets/style/cart/cart.css";
import CardCart from "../../components/card-cart";
import CardProduct from "../../components/card-product";
import Header from "../../layouts/header";

import { useEffect, useState } from "react";
import ProductEmpty from "../../components/product-empty";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/total-price-context";
import { useAddToCartDispatch } from "../../hooks/useAddToCardDispatch";
import { useAddToCart } from "../../hooks/useAddToCart";
import {
  useTotalQty,
  useTotalQtyDispatch,
} from "../../context/total-qty-context";
import CardProductDsc from "../../components/card-product-dsc";

export default function Cart() {
  const navigate = useNavigate();
  const totalPriceDispatch = useTotalPriceDispatch();
  const totalQtyDispatch = useTotalQtyDispatch();
  const cartDispatch = useAddToCartDispatch();
  const { cart } = useAddToCart();
  const [products, setProducts] = useState();
  const { total } = useTotalPrice();
  const { totalQty } = useTotalQty();

  const [productRecom, setProductRecom] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/sampel-data/products.json");
        const response = await res.json();
        setProductRecom(response.slice(3, 8));
        setProducts(response);
      } catch {
        console.log("Data gagal diambil");
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (products?.length > 0 && cart?.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      totalPriceDispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
    }
  }, [cart, products]);

  useEffect(() => {
    if (cart?.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      // console.log(sum);
      totalQtyDispatch({
        type: "UPDATE",
        payload: {
          totalQty: sum,
        },
      });
    }
  }, [cart]);

  console.log(totalQty);

  return (
    <>
      <Header className={"header-cart"} />
      <div className="content-cart">
        <div className="title-cart">
          <ShoppingCart />
          <p>Keranjang</p>
        </div>

        <div className="page-2">
          <div className="side-left">
            <div className="class-top">
              <div onClick={() => navigate(-1)} className="home-back">
                <ChevronLeft className="chevron-icon" />
                <p>Kembali</p>
              </div>

              <button
                onClick={() =>
                  cartDispatch({
                    type: "REMOVE_ALL_FROM_CART",
                    payload: {
                      cart: [],
                    },
                  })
                }
              >
                Hapus Semua
              </button>
            </div>

            <div className="card-content">
              {Array.isArray(cart) &&
                cart.map((item) => {
                  const product =
                    Array.isArray(products) &&
                    products.find((p) => p.id === item.id);

                  return (
                    <>
                      {product && (
                        <CardCart
                          key={product.id}
                          productId={product.id}
                          category={product.category}
                          cardImg={product.image}
                          sizeCart={item.size}
                          qtyCart={`Quantity: ${item.qty}pcs`}
                          priceCart={`Rp.${product.price.toLocaleString("id-ID")}`}
                          color={item.color}
                        >
                          {product.name}
                        </CardCart>
                      )}
                    </>
                  );
                })}
            </div>
          </div>
          <div className="side-right">
            <div className="order-box">
              <div className="order-title">
                <p>Ringkasan Pesanan</p>
              </div>
              <div className="item-text">
                <p>Total Item</p>
                <p>{totalQty}pcs</p>
              </div>
             
              <div className="total-text">
                <p>Total Harga</p>
                <p>Rp. {total.toLocaleString("id-ID")}</p>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="checkout-btn"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="page-3">
          <p className="title-page3">Rekomendasi Buat Kamu!</p>
          <div className="content-card">
            {productRecom.length > 0 ? (
              productRecom.map((item) =>
                item.discount ? (
                  <CardProductDsc
                    key={item.id}
                    id={item.id}
                    dscBadge={`- ${item.discount}%`}
                    oriPrice={`Rp.${item.originalPrice.toLocaleString("id-ID")}`}
                    dscPrice={`Rp.${item.price.toLocaleString("id-ID")}`}
                    imgDisc={item.image}
                  >
                    {item.name}
                  </CardProductDsc>
                ) : (
                  <CardProduct
                    key={item.id}
                    id={item.id}
                    category={item.category}
                    price={`Rp.${item.price.toLocaleString("id-ID")}`}
                    imgCard={item.image}
                  >
                    {item.name}
                  </CardProduct>
                ),
              )
            ) : (
              <ProductEmpty />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
