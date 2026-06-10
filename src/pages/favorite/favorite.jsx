import { ChevronLeft, Heart } from "lucide-react";
import MainLayout from "../../layouts/main-layout";
import "../../assets/style/favorite/favorite.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAddToFav } from "../../context/add-to-fav-context";
import CardProduct from "../../components/card-product";

import CardProductDsc from "../../components/card-product-dsc";
import ProductEmpty from "../../components/product-empty";

export default function Favorite() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { fav } = useAddToFav();

  const favProducts =
    products.length > 0
      ? fav
          .map((item) => products.find((product) => product.id === item.id))
          .filter(Boolean)
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

  console.log(favProducts);

  return (
    <MainLayout>
      <div className="content-favorite">
        <div className="title-section">
          <Heart className="title-icon" />
          <p>Favorite Kamu nih!</p>
        </div>

        <div onClick={() => navigate(-1)} className="group-home">
          <ChevronLeft className="icon-chevron" />
          <span>Kembali</span>
        </div>

        <div className="body-favorite">
          <div className="section-top">
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
        </div>
      </div>
    </MainLayout>
  );
}
