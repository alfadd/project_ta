import { LogOut, SquarePen } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../../assets/style/profile/edit-profile.css";
import MainLayout from "../../layouts/main-layout";

export default function EditProfile() {
  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <MainLayout>
        <div className="content-edit-profile">
          <div className="title-section">
            {/* <ShoppingBag className="title-icon" /> */}
            <p>Edit Profil</p>
          </div>

          <div className="group-top">

            <div className="top-logout" onClick={() => setIsShow(true)}>
              <p>Keluar</p>
              <LogOut className="logout-icon" />
            </div>
          </div>

          <div className="content-body">
            {/* <div className="section-1">
            <div className="img-group">
              <div className="profile-img"></div>
            </div>
            <div className="group-right">
              <div className="group-btn">
                <button className="change-img-btn">
                  <Images className="img-icon" />
                  <p>Change Image</p>
                </button>
                <button className="remove-img-btn">
                  <CircleX className="img-icon" />
                  <p>Remove Image</p>
                </button>
              </div>
              <p>We supports PNGs, JPGEs, and GIF under 5MB</p>
            </div>
          </div> */}

            <div className="section-2">
              <div className="group-input-name">
                <p>Nama Lengkap</p>
                <input type="text" />
              </div>
              <div className="group-input-phone">
                <p>Nomer Telepon</p>
                <input type="text" />
              </div>
            </div>

            <div className="section-3">
              <div className="section-3-title">
                <p>Keamanan Akun</p>
              </div>
              <div className="section-3-input">
                <div className="group-input-email">
                  <p>Email</p>
                  <div className="input-email">
                    <p>bety.orydigai@gmail.com</p>
                    <Link to="/editEmail" className="link-email">
                      <SquarePen className="edit-icon" />
                    </Link>
                  </div>
                </div>
                <div className="group-input-password">
                  <p>Kata Sandi</p>
                  <div className="input-password">
                    <p>******</p>
                    <Link to="/editPassword" className="link-pw">
                      <SquarePen className="edit-icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-4">
              <button
                className="btn-cancel"
                onClick={() => navigate("/profile")}
              >
                Batal
              </button>
              <button className="btn-save">Simpan Perubahan</button>
            </div>
          </div>
        </div>
      </MainLayout>
     {isShow && ( <div className="confirm-dialog">
        <div className="dialog-content">
          <p>Apakah anda yakin ingin keluar?</p>
          <div className="btn-group">
            <button className="yes" onClick={() => navigate("/login")}>Ya</button>
            <button className="no" onClick={() => setIsShow(false)}>Tidak</button>
          </div>
        </div>
      </div>)}
    </>
  );
}
