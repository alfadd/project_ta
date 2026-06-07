import MainLayout from "../../layouts/main-layout";
import {
  AlarmClock,
  ClockFading,
  Flower2,
  Heart,
  Search,
  ShoppingCart,
  User,
  UserRound,
  Zap,
} from "lucide-react";
import { Link } from "react-router";
import CategoryItemSmall from "../../components/category-item-small";
import CardProduct from "../../components/card-product";
import CategoryItemLarge from "../../components/category-item-large";
import CardProductDsc from "../../components/card-product-dsc";
import "../../assets/style/product-disc/product-disc.css";

import cardimgHaura from "../../../src/img/gamis anak/gamis_ank_haura.webp"
import kaoskSekolah from "../../../src/img/kaos kaki/anak_sekolah.webp"
import cardimgShanum from "../../../src/img/gamis anak/shanum.webp"
import gamisTsurayya from "../../../src/img/gamis/gamis_tsurayya.webp";
import hijabNonpetPoni from "../../../src/img/hijab/hijab_nonpet_poni.webp";
import kaosMotif from "../../../src/img/kaos kaki/motif.webp";

export default function ProductDisc() {
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
          <CardProductDsc
            dscBadge={"- 40%"}
            oriPrice={"Rp.200,000"}
            dscPrice={"Rp.150,000"}
            imgDisc={cardimgHaura}
          >
            Gamis Haura
          </CardProductDsc>

          <CardProductDsc
            dscBadge={"- 70%"}
            oriPrice={"Rp.25,000"}
            dscPrice={"Rp.15,000"}
            imgDisc={kaoskSekolah}
          >
            Sekolah
          </CardProductDsc>

          <CardProductDsc
            imgDisc={cardimgShanum}
            dscBadge={"- 40%"}
            oriPrice={"Rp.300,000"}
            dscPrice={"Rp.120,000"}
          >
            Gamis Shanum
          </CardProductDsc>

          <CardProductDsc
            dscBadge={"- 40%"}
            oriPrice={"Rp.350,000"}
            dscPrice={"Rp.250,000"}
            imgDisc={gamisTsurayya}
          >
            Gamis Tsurayya
          </CardProductDsc>

          <CardProductDsc
            dscBadge={"- 40%"}
            oriPrice={"Rp.170,000"}
            dscPrice={"Rp.120,000"}
            imgDisc={hijabNonpetPoni}
          >
            Non Pet Poni
          </CardProductDsc>

          <CardProductDsc
            dscBadge={"- 40%"}
            oriPrice={"Rp.30,000"}
            dscPrice={"Rp.18,000"}
            imgDisc={kaosMotif}
          >
            Kaos Kaki Embos
          </CardProductDsc>
        </div>
      </div>
    </MainLayout>
  );
}
