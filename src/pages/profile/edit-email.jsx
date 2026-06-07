import MainLayout from "../../layouts/main-layout";
import "../../assets/style/profile/edit-email.css"
import { useNavigate } from "react-router";

export default function EditEmail() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="content-edit-email">
        <div className="title-section">
          <p>Edit Profil</p>
        </div>

        <div className="content-body">
          <div className="title">
            <p>Ubah Email</p>
          </div>

          <div className="section-input">
            <div className="input-last-email">
              <p>Email Terakhir</p>
              <input type="text" />
            </div>
            <div className="input-last-email">
              <p>Email Baru</p>
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
