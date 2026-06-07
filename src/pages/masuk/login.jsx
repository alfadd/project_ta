import MainLayout from "../../layouts/main-layout";
import "../../assets/style/masuk/login.css";
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="content-login">
        <div className="content-body">
          <div className="section-title">
            <p>Masuk</p>
          </div>
          <div className="section-1">
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
          </div>

          <div className="section-bottom">
            <button>Konfirmasi</button>
            <div className="group-kata">
              <p>Belum memiliki Akun?</p>
              <p onClick={() => navigate("/regist")}>Yuk Daftar!</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
