import MainLayout from "../../layouts/main-layout";
import "../../assets/style/masuk/login.css";
import { useNavigate } from "react-router";
import InputField from "../../components/input-fields";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <MainLayout>
      <div className="content-login">
        <div className="content-body">
          <div className="section-title">
            <p>Masuk</p>
          </div>
          {/* <div className="section-1">
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
          </div> */}

          <div className="section-1">
            <InputField
              className="group-input-name"
              title="Email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value && !e.target.value.endswith("@gmail.com")) {
                  setError("Email harus menggunakan @gmail.com");
                } else {
                  setError("");
                }
              }}
            />
            {error && <p className="error-text">{error}</p>}
          </div>

          <div className="section-1">
            <InputField
              className="group-input-name"
              title="Kata Sandi"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <div className="group-input-name">
            <p>Nama Lengkap</p>

            <div className="input-wrapper">
              <input />
              <button className="toggle-password">
                <Eye />
              </button>
            </div>
          </div> */}

          <div className="section-bottom">
            <button
              onClick={() => {
                if (!email.endsWith("@gmail.com"))
                  return alert("Email harus menggunakan @gmail.com");
                
                if (!password.trim()) {
                  alert("Password harus diisi");
                  return;
                }

                if (password.length < 6) {
                  alert("Password minimal 6 karakter");
                  return;
                }

                navigate("/home");
              }}
            >
              Konfirmasi
            </button>

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
