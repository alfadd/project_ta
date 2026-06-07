import { ChevronLeft, HandCoins, ShoppingBag } from "lucide-react";
import MainLayout from "../../layouts/main-layout";
import "../../assets/style/checkout/checkout.css";
import cardImg from "../../../src/cardimg1.jpg";
import CardCheckout from "../../components/card-checkout";
import { useNavigate } from "react-router";

import gamisSet from "../../../src/img/gamis/gamis_abaya.webp";
import { useState } from "react";

export default function Checkout() {
  const navigate = useNavigate();

  const [isPayment, setIsPayment] = useState("");
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

              <CardCheckout
                imgCheckout={cardImg}
                sizeCheckout={"XL, Maroon"}
                qtyCheckout={"Quantity : 1"}
                categoryCheckout={"Gamis"}
                priceCheckout={"Rp. 250,000"}
              >
                Set Gamis Abaya
              </CardCheckout>

              <CardCheckout
                imgCheckout={gamisSet}
                sizeCheckout={"XL, Hitam"}
                qtyCheckout={"Quantity : 1"}
                categoryCheckout={"Gamis"}
                priceCheckout={"Rp. 250,000"}
              >
                Set Gamis Abaya
              </CardCheckout>

              <div className="detail-price">
                <div className="subtotal-group">
                  <p>Subtotal</p>
                  <p>Rp. 500,000</p>
                </div>
                <div className="item-group">
                  <p>Qty</p>
                  <p>2pcs</p>
                </div>
                <div className="ongkir-group">
                  <p>Ongkos Kirim</p>
                  <p>Rp. 10,000</p>
                </div>
                <div className="ppn-group">
                  <p>PPn</p>
                  <p>Rp. 15,000</p>
                </div>
              </div>
              <div className="total-group">
                <p>Total</p>
                <p>Rp. 525,000</p>
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
