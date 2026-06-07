import { ChevronLeft, History } from "lucide-react";
import MainLayout from "../../layouts/main-layout";
import "../../assets/style/history-order/history-order.css";
import { useState } from "react";
import OptionAll from "../../components/option-history-order/option-all";
import OptionOngoing from "../../components/option-history-order/option-ongoing";
import OptionDone from "../../components/option-history-order/option-done";
import CardHistoryOrder from "../../components/option-history-order/card-history-order";
import CardHistoryOrder2 from "../../components/option-history-order/card-history-order2";
import { useNavigate } from "react-router";

export default function HistoryOrder() {
  const [key, setKey] = useState(1);
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="content-history-order">
        <div className="title-section">
          <History className="title-icon" />
          <p>Riwayat Pesanan Kamu!</p>
        </div>

        <div onClick={() => navigate(-1)} className="group-home">
          <ChevronLeft className="icon-chevron" />
          <p>Kembali</p>
        </div>

        <div className="section-btn">
          {/* <button className="btn-all" onClick={() => setKey(1)}>
            Semua
          </button>
          <button className="btn-ongoing" onClick={() => setKey(2)}>
            Proses
          </button>
          <button className="btn-done" onClick={() => setKey(3)}>
            Selesai
          </button> */}

          <button
          className={`btn-all ${key === 1 ? "active" : ""}`}
          onClick={() => setKey(1)}
        >
          Semua
        </button>

        <button
          className={`btn-ongoing ${key === 2 ? "active" : ""}`}
          onClick={() => setKey(2)}
        >
          Proses
        </button>

        <button
          className={`btn-done ${key === 3 ? "active" : ""}`}
          onClick={() => setKey(3)}
        >
          Selesai
        </button>
        </div>

        

        {key === 1 ? (
          <OptionAll />
        ) : key === 2 ? (
          <OptionOngoing />
        ) : (
          <OptionDone />
        )}

        {/* <div className="fill-section">
          <div className="card-body-history">
            <div className="side-top">
              <div className="group-left">
                <p className="p1">Estimate Arrived : </p>
                <p className="p2"> May 25</p>
              </div>
              <div className="tagline-card">
                <p>On The Way</p>
              </div>
            </div>
            <div className="side-bottom">
              <div className="first-side">
                <div className="picture-card">
                  <img className="card-img-checkout" src={imgHistory} alt="" />
                </div>
              </div>
              <div className="second-side">
                <div className="group-1">
                  <p className="title-card">Set Gamis Abaya</p>
                  <p className="qty-card">1x</p>
                </div>
                <div className="group-2">
                  <p className="size-card">XL, Maroon</p>
                  <p className="price">Rp. 250,000</p>
                </div>
                <div className="group-3">
                  <div className="order-id">
                    <p className="p1">Order ID : </p>
                    <p className="p2">#id0999888</p>
                  </div>
                  <button className="detail-btn">Detail Order</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </MainLayout>
  );
}
