import MainLayout from "../../layouts/main-layout";
import "../../assets/style/masuk/regist.css";
import { useNavigate } from "react-router";
import InputField from "../../components/input-fields";
import { useState } from "react";

export default function Regist() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="content-regist">
        <div className="content-body">
          <div className="section-title">
            <p>Daftar</p>
          </div>

          <div className="section-1">
            <InputField
              className="group-input-name"
              title="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <InputField
              className="group-input-phone"
              title="Email"
              type="email"
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

            <InputField
              className="group-input-phone"
              title="Konfirmasi Kata Sandi"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* <div className="section-1">
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
          </div> */}

          <div className="section-bottom">
            <button
              onClick={() => {
                if (!email.trim()) {
                  alert("Email harus diisi");
                  return;
                }

                if (!email.endsWith("@gmail.com")) {
                  alert("Email harus menggunakan @gmail.com");
                  return;
                }

                if (!password.trim()) {
                  alert("Password harus diisi");
                  return;
                }

                if (password.length < 6) {
                  alert("Password minimal 6 karakter");
                  return;
                }

                if (password !== confirmPassword) {
                  alert("Konfirmasi password tidak sama");
                  return;
                }

                navigate("/");
              }}
            >
              Konfirmasi
            </button>
            <div className="group-kata">
              <p>Sudah Memiliki Akun?</p>
              <p onClick={() => navigate("/")}>Yuk Masuk!</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
