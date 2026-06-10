import MainLayout from "../../layouts/main-layout";
import "../../assets/style/profile/edit-password.css";
import { useNavigate } from "react-router";
import { useProfile, useProfileDispatch } from "../../context/profile-context";
import { useState } from "react";
import InputField from "../../components/input-fields";

export default function EditPassword() {
  const navigate = useNavigate();

  const { password } = useProfile();
  const dispatch = useProfileDispatch();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <MainLayout>
      <div className="content-edit-password">
        <div className="title-section">
          <p>Edit Profil</p>
        </div>

        <div className="content-body">
          <div className="title">
            <p>Ubah Kata Sandi</p>
          </div>

          <div className="section-input">

            <InputField
              className="input-last-password"
              title="Kata Sandi Lama"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />

            <InputField
              className="input-last-password"
              title="Kata Sandi Baru"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="section-btn">
            <button
              className="btn-cancel"
              onClick={() => navigate("/editProfile")}
            >
              Batal
            </button>
            <button
              className="btn-save"
              onClick={() => {
                console.log("Password Context:", password);
                console.log("Input Password Lama:", oldPassword);
                if (oldPassword !== password) {
                  alert("Password Lama Salah!");
                  return;
                }

                if (!oldPassword || !newPassword) {
                  alert("Semua field harus diisi!");
                  return;
                }

                if (newPassword.length < 6) {
                  alert("Password minimal 6 karakter!");
                  return;
                }

                dispatch({
                  type: "UPDATE_PROFILE",
                  payload: {
                    password: newPassword,
                  },
                });

                alert("Password Berhasil Dirubah");
                navigate("/editProfile");
              }}
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
