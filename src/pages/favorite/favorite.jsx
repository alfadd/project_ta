import { ChevronLeft, Heart } from "lucide-react";
import MainLayout from "../../layouts/main-layout";
import "../../assets/style/favorite/favorite.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Favorite() {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    setFavorites(data);
  }, []);

  function handleRemove(id) {
    const newFavorites =
      favorites.filter(
        (item) => item.id !== id
      );

    setFavorites(newFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(newFavorites)
    );
  }

  return (
    <MainLayout>
      <div className="content-favorite">
        <div className="title-section">
          <Heart className="title-icon" />
          <p>Favorite Kamu nih!</p>
        </div>

        <div
          onClick={() => navigate(-1)}
          className="group-home"
        >
          <ChevronLeft className="icon-chevron" />
          <span>Kembali</span>
        </div>

        <div className="body-favorite">
          <div className="section-top">

            {favorites.map((item) => (
              <div
                key={item.id}
                className="card"
              >
                <div className="card-header">
                  <div className="tagline">
                    <p>
                      {item.category}
                    </p>
                  </div>

                  <img
                    className="card-img"
                    src={item.image}
                    alt=""
                  />
                </div>

                <div className="card-body">
                  <div className="body-1">
                    <h5 className="title">
                      {item.name}
                    </h5>

                    <Heart
                      className="fav-icon active"
                      onClick={() =>
                        handleRemove(item.id)
                      }
                    />
                  </div>

                  <h5 className="price">
                    {item.price}
                  </h5>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </MainLayout>
  );
}