import {
  ChevronRightCircle,
  ClockFading,
  Heart,
  Search,
  ShoppingCart,
  UserRound,
  Zap,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
// import cardimg1 from "../../../src/cardimg1.jpg";
import "../../assets/style/home/home.css";
import CardProduct from "../../components/card-product";
import CardProductDsc from "../../components/card-product-dsc";
import CategoryItemLarge from "../../components/category-item-large";
import MainLayout from "../../layouts/main-layout";

import gamisCardi from "../../../src/img/gamis/gamis_cardi.webp";

import cardimgHaura from "../../../src/img/gamis anak/gamis_ank_haura.webp";
import cardimgShanum from "../../../src/img/gamis anak/shanum.webp";
import gamisTsurayya from "../../../src/img/gamis/gamis_tsurayya.webp";
import hijabNonpetPoni from "../../../src/img/hijab/hijab_nonpet_poni.webp";
import kaoskSekolah from "../../../src/img/kaos kaki/anak_sekolah.webp";
import { useEffect, useState } from "react";
import ProductEmpty from "../../components/product-empty";

export default function Home() {
  const navigate = useNavigate();
  const [productRec, setProductRec] = useState([]);
  const [productDisc, setProductDisc] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/sampel-data/products.json");
        const response = await res.json();
        setProductRec(response.slice(0, 6));
        setProductDisc(response.filter((item) => item.discount).slice(0, 6));
      } catch {
        console.log("Data gagal diambil");
      }
    };

    getProducts();
  }, []);

  console.log(productRec)

  return (
    <MainLayout>
      <div id="home" className="home">
        <div className="header-home">
          <div className="input-search">
            <input type="text" placeholder="Cari produk yang kamu mau!" />
            <button>
              <Search className="icon-search" />
            </button>
          </div>
          <div className="icon-menu">
            <Link to="/cart" className="icon-menu-item">
              <ShoppingCart className="shopping-icon" />
            </Link>
            <Link to="/favorite" className="icon-menu-item">
              <Heart className="heart-icon" />
            </Link>
            <Link to="/profile" className="icon-menu-item">
              <UserRound className="user-icon" />
            </Link>
          </div>
        </div>

        <div className="content-home">
          {/* <div className="picture-menu"> */}
          <img className="picture-menu" src="header-img.png" alt="" />
          {/* </div> */}

          <div className="content-categories">
            <div className="body-categories">
              <div
                className="yes"
                onClick={() => navigate("/allProduct?category=dewasa")}
              >
                <CategoryItemLarge>Dewasa</CategoryItemLarge>
              </div>

              <div
                className="yes"
                onClick={() => navigate("/allProduct?category=anak")}
              >
                <CategoryItemLarge>Anak-anak</CategoryItemLarge>
              </div>
            </div>
          </div>

          <div className="group-rekomen">
            <p onClick={() => navigate("/allProduct")} className="rekom-title">
              Rekomendasi Buat Kamu!
            </p>
            <div
              onClick={() => navigate("/allProduct")}
              className="group-lainnya"
            >
              <p>Lainnya</p>
              <ChevronRightCircle className="chevron-icon" />
            </div>
          </div>

          <div className="content-card">
            {productRec.length > 0 ? productRec.map((item) => (
              <CardProduct
                key={item.id}
                id={item.id}
                category={item.category}
                price={`Rp.${item.price.toLocaleString("id-ID")}`}
                imgCard={item.image}
              >
                {item.name}
              </CardProduct>
            )): <ProductEmpty />}
          </div>

          {/* <div className="picture-sale"></div> */}

          <div onClick={() => navigate("/productDisc")} className="flashsale">
            <div className="group-left">
              <h2 className="flashsale-title">
                <Zap className="flashsale-icon" /> Diskon Flash Sale
              </h2>

              <div className="flashsale-timer">
                <ClockFading className="timer-icon" />
                <h4>2 hari lagi!</h4>
              </div>
            </div>
            <div
              onClick={() => navigate("/productDisc")}
              className="group-lainnya"
            >
              <p>Lainnya</p>
              <ChevronRightCircle className="chevron-icon" />
            </div>
          </div>

          <div className="content-card-disc">
            {productDisc.length > 0 ? productDisc.map((item) => (
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
            )): <ProductEmpty />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
