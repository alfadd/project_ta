import {
  ClockFading,
  Heart,
  Search,
  ShoppingCart,
  UserRound,
  Zap
} from "lucide-react";
import { Link } from "react-router";
import "../../assets/style/product-disc/product-disc.css";
import CardProductDsc from "../../components/card-product-dsc";
import MainLayout from "../../layouts/main-layout";

import { useEffect, useState } from "react";
import ProductEmpty from "../../components/product-empty";

export default function ProductDisc() {
  const [productDisc, setProductDisc] = useState([]);

  useEffect(() => {
    const getProductDisc = async () => {
      try {
        const res = await fetch("/sampel-data/products.json");
        const response = await res.json();
        setProductDisc(response.filter((item) => item.discount));
      } catch {
        console.log("Data gagal diambil");
      }
    };
    getProductDisc();
  }, []);

  return (
    <MainLayout>
      <div className="content-product-disc">
        <div className="header-product-disc">
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

        <div className="flashsale">
          <h2 className="flashsale-title">
            <Zap className="flashsale-icon" /> Diskon Flash Sale
          </h2>

          <div className="flashsale-timer">
            <ClockFading className="timer-icon" />
            <h4>Tersisa 2 hari lagi!</h4>
          </div>
        </div>

        <div className="content-card-disc">
          {productDisc.length > 0 ? (
            productDisc.map((item) => (
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
            ))
          ) : (
            <ProductEmpty />
          )}
        </div>
      </div>
    </MainLayout>
  );
}
