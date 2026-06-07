import { useEffect, useState } from "react";
import CardProduct from "../card-product";
import CardProductDsc from "../card-product-dsc";
import { filterCard } from "../../utils/filter-card";
import ProductEmpty from "../product-empty";

export default function ProductChild() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // function get product
    const getProducts = async () => {
      try {
        const res = await fetch("/sampel-data/products.json");
        const response = await res.json();
        setProducts(response.filter((item) => item.target === "Anak"));
      } catch {
        console.log("Data gagal di ambil");
      }
    };

    getProducts();
  }, []);

  const gamis = products.filter((item) => item.category === "Gamis");

  const kaosKaki = products.filter((item) => item.category === "Kaos Kaki");

  return (
    <div className="content-body">
      <div className="group-product">
        <div className="title">
          <p>Gamis</p>
        </div>

        <div className="body-card">
          {gamis.length > 0 ? filterCard(gamis) : <ProductEmpty />}
        </div>
      </div>

      <div className="group-product">
        <div className="title">
          <p>Kaos Kaki</p>
        </div>

        <div className="body-card">
          {kaosKaki.length > 0 ? filterCard(kaosKaki) : <ProductEmpty />}
        </div>
      </div>
    </div>
  );
}
