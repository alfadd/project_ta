import {
  ChevronLeft,
  Link,
  MinusIcon,
  PlusIcon,
  ShoppingCart,
  SquareCheck,
  Trash2,
} from "lucide-react";
import ContainerLayout from "../../layouts/container-layout";
import MainLayout from "../../layouts/main-layout";
import "../../assets/style/cart/cart.css";
import imgCart from "../../../src/cardimg1.jpg";
import CardCart from "../../components/card-cart";
import CardProduct from "../../components/card-product";
import Header from "../../layouts/header";
import { useNavigate } from "react-router";

import gamisCardi from "../../../src/img/gamis/gamis_cardi.webp";
import gamisTsurayya from "../../../src/img/gamis/gamis_tsurayya.webp";
import cardimgAisyah from "../../../src/img/gamis anak/aisyah.webp"
import cardimgZaiha from "../../../src/img/gamis anak/zaiha.webp"
import kaoskBunga from "../../../src/img/kaos kaki/anak_motif_bunga.webp"
import CardProductDsc from "../../components/card-product-dsc";
import gamisSet from "../../../src/img/gamis/gamis_abaya.webp";

export default function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <Header className={"header-cart"}/>
      <div className="content-cart">
        <div  className="title-cart">
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

              <button>Hapus Semua</button>
            </div>

            <div className="card-content">

              <CardCart
                category={"Gamis"}
                cardImg={imgCart}
                sizeCart={"XL, Maroon"}
                
                priceCart={"Rp.200,000"}
              >
                Gamis Abaya
              </CardCart>
              <CardCart
                category={"Gamis"}
                cardImg={gamisSet}
                sizeCart={"XL, Hitam"}
                
                priceCart={"Rp.200,000"}
              >
                Set Gamis Abaya
              </CardCart>
            </div>
          </div>
          <div className="side-right">
            <div className="order-box">
              <div className="order-title">
                <p>Ringkasan Pesanan</p>
              </div>
              <div className="item-text">
                <p>Subtotal Item</p>
                <p>2pcs</p>
              </div>
              <div className="subtotal-text">
                <p>Subtotal Harga</p>
                <p>Rp.250,000</p>
              </div>
              <div className="total-text">
                <p>Total Harga</p>
                <p>Rp.500,000</p>
              </div>
              <button onClick={() => navigate("/checkout")} className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
        <div className="page-3">
          <p className="title-page3">Rekomendasi Buat Kamu!</p>
          <div className="content-card">
            <CardProduct
            category={"Gamis"}
            price={"Rp.240,000"}
            imgCard={gamisCardi}
          >
            Gamis Cardigan
          </CardProduct>
          <CardProductDsc
            dscBadge={"- 40%"}
            oriPrice={"Rp.350,000"}
            dscPrice={"Rp.250,000"}
            imgDisc={gamisTsurayya}
          >
            Gamis Tsurayya
          </CardProductDsc>
            <CardProduct
            category={"Gamis"}
            price={"Rp.290,000"}
            imgCard={cardimgAisyah}
          >
            Gamis Aisyah
          </CardProduct>
          <CardProduct
            category={"Gamis"}
            price={"Rp.140,000"}
            imgCard={cardimgZaiha}
          >
            Gamis Zaiha
          </CardProduct>
            <CardProduct
            category={"Kaos Kaki"}
            price={"Rp.10,000"}
            imgCard={kaoskBunga}
          >
            Motif Bunga
          </CardProduct>
          </div>
        </div>
      </div>
    </>
  );
}
