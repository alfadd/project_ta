import {
  ChevronRightCircle,
  ChevronsRight,
  CircleCheckBig,
  Heart,
  History,
  Mails,
  Package,
  Phone,
  ShoppingBag,
  UserPen,
  UserRoundIcon
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import imgCardFav from "../../../src/cardimg1.jpg";
import "../../assets/style/profile/profile.css";
import CardCheckout from "../../components/card-checkout";
import CardProduct from "../../components/card-product";
import MainLayout from "../../layouts/main-layout";

import { useEffect, useState } from "react";
import ProductEmpty from "../../components/product-empty";
import { useAddToFav } from "../../context/add-to-fav-context";
import { useProfile } from "../../context/profile-context";
import CardProductDsc from "../../components/card-product-dsc";

export default function Profile() {
  const navigate = useNavigate();

  const { fullName, phone, email } = useProfile();

  const [products, setProducts] = useState([]);
  const { fav } = useAddToFav();

  const favProducts =
    products.length > 0
      ? fav
          .map((item) => products.find((product) => product.id === item.id))
          .filter(Boolean).slice(0, 3)
      : [];

  useEffect(() => {
    const getProdudcts = async () => {
      try {
        const res = await fetch("/sampel-data/products.json");
        const response = await res.json();
        setProducts(response);
      } catch {
        console.log("Produk gagal diambil");
      }
    };

    getProdudcts();

  }, []);
  console.log(products)
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
                <UserRoundIcon className="user-icon" />
              </div>
            </div>
            <div className="group-right">
              <div className="group-right-top">
                <div className="group-name">
                  <p>{fullName}</p>
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
                    <p>{email}</p>
                  </div>
                  <div className="group-phone">
                    <Phone className="phone-icon" />
                    <p>{phone}</p>
                  </div>
                </div>
            
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
                {favProducts.length > 0 ? (
                  favProducts.map((item) =>
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
