import { ChevronLeft, HandCoins, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";
import "../../assets/style/checkout/checkout.css";
import CardCheckout from "../../components/card-checkout";
import MainLayout from "../../layouts/main-layout";

import { useEffect, useState } from "react";
import { useTotalPrice } from "../../context/total-price-context";
import { useTotalQty } from "../../context/total-qty-context";
import { useAddToCart } from "../../hooks/useAddToCart";

export default function Checkout() {
  const navigate = useNavigate();
  const [isPayment, setIsPayment] = useState("");

  const { cart } = useAddToCart();
  const { total } = useTotalPrice();
  const { totalQty } = useTotalQty();

  const ongkir = 10000;
  const ppn = total * 0.11;
  const grandTotal = total + ongkir + ppn;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/sampel-data/products.json");
      const data = await res.json();

      setProducts(data);
    };

    getProducts();
  }, []);
  return (
    <MainLayout>
      <div className="content-checkout">
        <div className="title-section">
          <ShoppingBag className="title-icon" />
          <p>Checkout</p>
        </div>

        <div onClick={() => navigate(-1)} className="group-home">
          <ChevronLeft className="icon-chevron" />
          <p>Kembali</p>
        </div>

        <div className="body-checkout">
          <div className="section-left">
            <div className="section-1">
              <p>Informasi Pelanggan</p>
              <div className="name-input-group">
                <div className="first-name">
                  <p>Nama Depan</p>
                  <input className="name-input" type="text"></input>
                </div>
                <div className="last-name">
                  <p>Nama Belakang</p>
                  <input className="name-input" type="text"></input>
                </div>
              </div>
              <div className="address">
                <p>Alamat Pengiriman</p>
                <textarea
                  className="address-input"
                  placeholder="Masukkan alamat lengkap..."
                />
              </div>
            </div>
            <div className="section-2">
              <p>Metode Pembayaran</p>
              <div className="payment-list">
                <div
                  className={`payment-fill-1 ${isPayment === "COD" ? "active" : ""}`}
                  onClick={() => setIsPayment("COD")}
                >
                  <div className="payment-icon">
                    <HandCoins className="cod-icon-1" />
                  </div>
                  <p>Cash On Delivery</p>
                  <input
                    className="payment-btn"
                    type="radio"
                    checked={isPayment === "COD"}
                    readOnly
                  />
                </div>

                <div
                  className={`payment-fill-1 ${isPayment === "Dana" ? "active" : ""}`}
                  onClick={() => setIsPayment("Dana")}
                >
                  <div className="payment-icon">
                    <HandCoins className="cod-icon-1" />
                  </div>
                  <p>Dana</p>
                  <input
                    className="payment-btn"
                    type="radio"
                    checked={isPayment === "Dana"}
                    readOnly
                  />
                </div>

                <div
                  className={`payment-fill-1 ${isPayment === "QRIS" ? "active" : ""}`}
                  onClick={() => setIsPayment("QRIS")}
                >
                  <div className="payment-icon">
                    <HandCoins className="cod-icon-1" />
                  </div>
                  <p>QRIS</p>
                  <input
                    className="payment-btn"
                    type="radio"
                    checked={isPayment === "QRIS"}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section-right">
            <div className="section-1">
              <p>Ringkasan Pesanan</p>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id,
                );

                if (!product) return null;

                return (
                  <CardCheckout
                    key={item.id}
                    imgCheckout={product.image}
                    sizeCheckout={item.size}
                    qtyCheckout={`Quantity : ${item.qty}`}
                    categoryCheckout={product.category}
                    priceCheckout={`Rp. ${product.price.toLocaleString("id-ID")}`}
                    color={item.color}
                  >
                    {product.name}
                  </CardCheckout>
                );
              })}

              <div className="detail-price">
                <div className="subtotal-group">
                  <p>Subtotal</p>
                  <p>Rp. {total.toLocaleString("id-ID")}</p>
                </div>
                <div className="item-group">
                  <p>Qty</p>
                  <p>{totalQty}pcs</p>
                </div>
                <div className="ongkir-group">
                  <p>Ongkos Kirim</p>
                  <p>Rp. {ongkir.toLocaleString("id-ID")}</p>
                </div>
                <div className="ppn-group">
                  <p>PPn</p>
                  <p>Rp. {ppn.toLocaleString("id-ID")}</p>
                </div>
              </div>
              <div className="total-group">
                <p>Total</p>
                <p>Rp. {grandTotal.toLocaleString("id-ID")}</p>
              </div>
              <div className="payment-btn">
                <button onClick={() => navigate("/orderSuccess")}>
                  Konfirmasi
                </button>
              </div>
            </div>
            <div className="section-2"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
