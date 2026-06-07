import MainLayout from "../../layouts/main-layout";
import imgSuccess from "../../../src/order-success.png";
import "../../assets/style/order-success/order-success.css";
import { useNavigate } from "react-router";

export default function OrderSuccess() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="content-order-success">
        <div className="section-img">
          <img src={imgSuccess} alt="" className="img" />
        </div>

        <div className="section-bottom">
          <p className="head">Pesanan Anda Berhasil Dibuat</p>
          <p className="sub-head">
            Terima kasih telah berbelanja di Ummu Afifa Collection! 
          </p>
          <p className="sub-head1">Pesanan Anda sedang kami proses ^^</p>

          <button onClick={() => navigate("/")} >Kembali ke Beranda</button>
        </div>
      </div>
    </MainLayout>
  );
}
