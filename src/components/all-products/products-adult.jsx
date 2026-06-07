import { useEffect, useState } from "react";
import CardProduct from "../card-product";
import CardProductDsc from "../card-product-dsc";
import { filterCard } from "../../utils/filter-card";
import ProductEmpty from "../product-empty";

export default function ProductAdult() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/sampel-data/products.json");
        const response = await res.json();
        setProducts(response.filter((item) => item.target === "Dewasa"));
      } catch {
        console.log("Data gagal di ambil");
      }
    };

    getProducts();
  }, []);

  const gamis = products.filter((item) => item.category === "Gamis");

  const hijab = products.filter((item) => item.category === "Hijab");

  const kaosKaki = products.filter((item) => item.category === "Kaos Kaki");

  return (
    <div className="content-body">
      <div className="group-product">
        <div className="title">
          <p>Gamis</p>
        </div>

        <div className="body-card">{gamis.length > 0 ? filterCard(gamis) : <ProductEmpty />}</div>
      </div>

      <div className="group-product">
        <div className="title">
          <p>Hijab</p>
        </div>

        <div className="body-card">{hijab.length > 0 ? filterCard(hijab) : <ProductEmpty />}</div>
      </div>

      <div className="group-product">
        <div className="title">
          <p>Kaos Kaki</p>
        </div>

        <div className="body-card">{kaosKaki.length > 0 ? filterCard(kaosKaki) : <ProductEmpty />}</div>
      </div>
    </div>
  );
}

