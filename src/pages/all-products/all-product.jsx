// import { useState } from "react";
import MainLayout from "../../layouts/main-layout";
import CardProduct from "../../components/card-product";
import "../../assets/style/all-products/all-product.css";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import ProductAdult from "../../components/all-products/products-adult";
import ProductChild from "../../components/all-products/products-child";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useState } from "react";

export default function AllProduct() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search") || "";

  const [isSearch, setIsSearch] = useState("");

  const handleSearch = () => {
    if (!isSearch.trim()) {
      navigate("/allProduct");
      return;
    }

    navigate(`/allProduct?search=${encodeURIComponent(isSearch)}`);
  };

  const [option, setOption] = useState(category === "anak" ? 2 : 1);

  return (
    <MainLayout>
      <div className="content-all-product">
        <div className="header-home">
          <div className="input-search">
            <input
              type="text"
              placeholder="Cari produk yang kamu mau!"
              value={isSearch}
              onChange={(e) => setIsSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button onClick={handleSearch}>
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

        {option === 1 ? (
          <ProductAdult search={search} />
        ) : (
          <ProductChild search={search} />
        )}
      </div>
    </MainLayout>
  );
}
