import MainLayout from "../../layouts/main-layout";
import "../../assets/style/masuk/regist.css";
import { useNavigate } from "react-router";

export default function Regist() {
    const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="content-regist">
        <div className="content-body">
          <div className="section-title">
            <p>Daftar</p>
          </div>
          <div className="section-1">
            <div className="group-input-name">
              <p>Username</p>
              <input type="text" />
            </div>
            <div className="group-input-phone">
              <p>Email</p>
              <input type="text" />
            </div>
          </div>

          <div className="section-1">
            <div className="group-input-name">
              <p>Kata Sandi</p>
              <input type="text" />
            </div>
            <div className="group-input-phone">
              <p>Konfirmasi Kata Sandi</p>
              <input type="text" />
            </div>
          </div>

          <div className="section-bottom">
            <button>Konfirmasi</button>
            <div className="group-kata">
              <p>Sudah Memiliki Akun?</p>
              <p onClick={() => navigate("/login")}>Yuk Masuk!</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
