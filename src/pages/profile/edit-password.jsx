import MainLayout from "../../layouts/main-layout";
import "../../assets/style/profile/edit-password.css"
import { useNavigate } from "react-router";

export default function EditPassword() {
  const navigate = useNavigate();
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
            <div className="input-last-password">
              <p>kata Sandi Lama</p>
              <input type="text" />
            </div>
            <div className="input-last-password">
              <p>kata Sandi Baru</p>
              <input type="text" />
            </div>
          </div>

          <div className="section-btn">
            <button className="btn-cancel" onClick={() => navigate("/editProfile")}>Batal</button>
            <button className="btn-save">Simpan Perubahan</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
