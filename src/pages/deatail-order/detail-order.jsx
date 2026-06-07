import CardCheckout from "../../components/card-checkout";
import MainLayout from "../../layouts/main-layout";
import imgCheckout from "../../../src/cardimg1.jpg";
import { ChevronLeft, History, ReceiptText } from "lucide-react";
import "../../assets/style/detail-order/detail-order.css";
import { Link, useNavigate } from "react-router";
export default function DetailOrder() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="content-detail-order">
        <div className="title-section">
          <ReceiptText className="title-icon" />
          <p>Detail Pesanan</p>
        </div>

        <div onClick={() => navigate(-1)} className="group-home">
          <ChevronLeft className="icon-chevron" />
          <p>Kembali</p>
        </div>

        <div className="content-body">
          <div className="section-1">
            <div className="side-left">
              <p className="order-1">Order ID</p>
              <p className="order-2">#B90219XV890</p>
            </div>
            <div className="side-right">
              <p className="date-1">Perkiraan Tiba</p>
              <p className="date-2">24 Mei, 2026</p>
            </div>
          </div>

          <div className="section-2">
            <div className="left-2">
              <div className="section-item">
                <p>Produk (2)</p>
                <div className="section-card">
                  <CardCheckout
                    imgCheckout={imgCheckout}
                    sizeCheckout={"XL, Maroon"}
                    qtyCheckout={"Quantity : 1x"}
                    categoryCheckout={"Gamis"}
                    priceCheckout={"Rp. 250,000"}
                  >
                    Set Gamis Abaya
                  </CardCheckout>
                  <CardCheckout
                    imgCheckout={imgCheckout}
                    sizeCheckout={"L, Black"}
                    qtyCheckout={"Quantity : 1x"}
                    categoryCheckout={"Gamis"}
                    priceCheckout={"Rp. 250,000"}
                  >
                    Set Gamis Abaya
                  </CardCheckout>
                </div>
              </div>
              <div className="section-track">
                <p>Status Pesananmu!</p>
                <div className="track-1">
                  <div className="track-1-left">
                    <p className="p1">24 Mei</p>
                    <p className="p2">|</p>
                    <p className="p1">08.16</p>
                  </div>
                  <p>Pesanan Berhasil Dibuat</p>
                </div>
                <div className="track-1">
                  <div className="track-1-left">
                    <p className="p1">24 May</p>
                    <p className="p2">|</p>
                    <p className="p1">19.16</p>
                  </div>
                  <p>Pesanan Dibuat</p>
                </div>
                <div className="track-1">
                  <div className="track-1-left">
                    <p className="p1">25 May</p>
                    <p className="p2">|</p>
                    <p className="p1">09.06</p>
                  </div>
                  <p>Paket Anda Sedang Diproses</p>
                </div>
                <div className="track-1">
                  <div className="track-1-left">
                    <p className="p1">26 May</p>
                    <p className="p2">|</p>
                    <p className="p1">11.10</p>
                  </div>
                  <div className="track-1-right">
                  <p>Paket Anda Sedang Dalam Perjalanan!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-2">
              <div className="section-summary">
                <p>Ringkasan Pesanan</p>
                <div className="detail-price">
                  {/* <div className="subtotal-group">
                    <p>Subtotal</p>
                    <p>Rp. 750,000</p>
                  </div> */}
                  <div className="item1-group">
                    <p>Total Item</p>
                    <p>2pcs</p>
                  </div>
                  <div className="item1-group">
                    <p>Set Gamis Abaya (2x)</p>
                    <p>Rp. 500,000</p>
                  </div>

                  <div className="ongkir-group">
                    <p>Ongkos Kirim</p>
                    <p>Rp. 10,000</p>
                  </div>
                  <div className="ppn-group">
                    <p>PPn</p>
                    <p>Rp. 0</p>
                  </div>
                </div>
                <div className="total-group">
                  <p>Total</p>
                  <p>Rp. 510,000</p>
                </div>
              </div>

              <div className="section-payment">
                <p className="p1">Pembayaran</p>
                <p className="p2">Cash On Delivery (COD)</p>
              </div>

              <div className="section-address">
                <p className="address-title">Alamat</p>
                <p className="address-1">(+62 8888888888888)</p>
                <p className="address-2">
                  Jl. Kahayang Sari, Ds. Bujorito, Kec. Mulup Diso, Kab.
                  Burokrari, Jawa Barat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
