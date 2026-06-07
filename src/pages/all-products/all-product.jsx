// import { useState } from "react";
import MainLayout from "../../layouts/main-layout";
import CardProduct from "../../components/card-product";
import "../../assets/style/all-products/all-product.css";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import ProductAdult from "../../components/all-products/products-adult";
import ProductChild from "../../components/all-products/products-child";
import { Link, useSearchParams } from "react-router";
import { useState } from "react";

export default function AllProduct() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const [option, setOption] = useState(category === "anak" ? 2 : 1);

  // useEffect(() => {
  //   if (category === "anak") {
  //     setOption(2);
  //   } else {
  //     setOption(1);
  //   }
  // }, [category]);

  return (
    <MainLayout>
      <div className="content-all-product">
        {/* HEADER */}

        <div className="section-btn">
          <button
            className={`btn-dewasa ${option === 1 ? "active" : ""}`}
            onClick={() => setOption(1)}
          >
            Dewasa
          </button>

          <button
            className={`btn-anak ${option === 2 ? "active" : ""}`}
            onClick={() => setOption(2)}
          >
            Anak-Anak
          </button>
        </div>

        {option === 1 ? <ProductAdult /> : <ProductChild />}
      </div>
    </MainLayout>
  );
}

{
  /* <div className="content-body">
          <div className="group-product">
            <div className="title">
            <p>Set Gamis</p>
            </div>
            <div className="body-card">
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            </div>
          </div>
          <div className="group-product">
            <div className="title">
            <p>Gamis</p>
            </div>
            <div className="body-card">
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            </div>
          </div>

          <div className="group-product">
            <div className="title">
            <p>Hijab</p>
            </div>
            <div className="body-card">
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            </div>
          </div>

          <div className="group-product">
            <div className="title">
            <p>Kaos Kaki</p>
            </div>
            <div className="body-card">
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            <CardProduct
              category={"Gamis"}
              price={"Rp.200,000"}
              imgCard={cardimg1}
            >
              Set Gamis Abaya
            </CardProduct>
            
            </div>
            
          </div>
        </div> */
}
