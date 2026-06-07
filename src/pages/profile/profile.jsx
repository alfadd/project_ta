import {
  BadgeCheck,
  ChevronRightCircle,
  ChevronsRight,
  CircleCheckBig,
  CircleQuestionMark,
  Heart,
  History,
  Mails,
  MessageCircle,
  Package,
  Phone,
  ShoppingBag,
  UserPen,
  UserRound,
  UserRoundIcon,
} from "lucide-react";
import MainLayout from "../../layouts/main-layout";
import "../../assets/style/profile/profile.css";
import CardProduct from "../../components/card-product";
import imgCardFav from "../../../src/cardimg1.jpg";
import CardCheckout from "../../components/card-checkout";
import { Link, useNavigate } from "react-router";

import cardimgAisyah from "../../../src/img/gamis anak/aisyah.webp";
import cardimgZaiha from "../../../src/img/gamis anak/zaiha.webp";
import cardimgShamumkom from "../../../src/img/gamis anak/shanum_kombinasi.webp";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="content-profile">
        <div className="title-section">
          <ShoppingBag className="title-icon" />
          <p>Profil Kamu!</p>
        </div>

        <div className="content-profile-top">
          <div className="section-1">
            <div className="img-group">
              <div className="profile-img">
                <UserRoundIcon className="user-icon"/>
              </div>
            </div>
            <div className="group-right">
              <div className="group-right-top">
                <div className="group-name">
                  <p>Bety Ordiga</p>
                  <CircleCheckBig className="check-icon" />
                </div>
                <Link to="/editProfile" className="group-edit">
                  <UserPen className="user-icon" />
                  <p>Edit Profile</p>
                </Link>
              </div>
              <div className="group-right-bottom">
                <div className="group-left">
                  <div className="group-email">
                    <Mails className="email-icon" />
                    <p>bety.orydigai@gmail.com </p>
                  </div>
                  <div className="group-phone">
                    <Phone className="phone-icon" />
                    <p>08389428922</p>
                  </div>
                </div>
                {/* <div className="group-right">
                  <div className="lvl-profile">
                    <p>Lv.1</p>
                  </div>
                  <CircleQuestionMark className="question-icon" />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="status-packet">
          <div className="group-left">
            <Package className="packet-icon" />
            <p className="id-text">(#id1120260603)</p>
            <p className="packet-desc">Paket kamu sedang di perjalanan!</p>
          </div>
          <Link to="/detailOrder" className="group-right">
            <p>Lihat Detail</p>
            <ChevronsRight className="detail-icon" />
          </Link>
        </div>

        <div className="content-profile-bottom">
          <div className="left-side">
            <div className="content-fav">
              <div className="title-fav">
                <Heart className="fav-icon" />
                <p>Produk Favorit Kamu nih!</p>
              </div>
              <div className="body-fav">
                {/* <div className="content-card"> */}
                <CardProduct
                  category={"Gamis"}
                  price={"Rp.340,000"}
                  imgCard={cardimgShamumkom}
                >
                  Shanum Komb..
                </CardProduct>
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
              </div>
              {/* </div> */}
              <div className="bottom-fav">
                <div className="line-bottom"></div>
                <div
                  onClick={() => navigate("/favorite")}
                  className="group-lainnya"
                >
                  <p>Lihat yang lainnya</p>
                  <ChevronRightCircle className="chevron-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="content-history">
              <div className="title-history">
                <History className="history-icon" />
                <p>Riwayat produk yang kamu beli!</p>
              </div>
              <div className="body-history">
                <CardCheckout
                  imgCheckout={imgCardFav}
                  sizeCheckout={"XL, Maroon"}
                  qtyCheckout={"Quantity : 1"}
                  categoryCheckout={"Gamis"}
                  priceCheckout={"Rp. 250,000"}
                >
                  Set Gamis Abaya
                </CardCheckout>
                <CardCheckout
                  imgCheckout={imgCardFav}
                  sizeCheckout={"XL, Maroon"}
                  qtyCheckout={"Quantity : 1"}
                  categoryCheckout={"Gamis"}
                  priceCheckout={"Rp. 250,000"}
                >
                  Set Gamis Abaya
                </CardCheckout>
              </div>
              <div className="bottom-history">
                <div className="line-bottom"></div>
                <div
                  onClick={() => navigate("/historyOrder")}
                  className="group-lainnya"
                >
                  <p>Lihat yang lainnya</p>
                  <ChevronRightCircle className="chevron-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
