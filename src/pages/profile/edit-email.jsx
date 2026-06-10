import MainLayout from "../../layouts/main-layout";
import "../../assets/style/profile/edit-email.css";
import { useNavigate } from "react-router";
import { useProfile, useProfileDispatch } from "../../context/profile-context";
import { useState } from "react";

export default function EditEmail() {
  const navigate = useNavigate();

  const { email } = useProfile();
  const dispatch = useProfileDispatch();

  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState("");
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
              <input type="text" value={email} disabled />
            </div>
            <div className="input-new-email">
              <p>Email Baru</p>
              <input
                type="text"
                value={newEmail}
                onChange={(e) => {
                  setNewEmail(e.target.value);

                  if (
                    e.target.value &&
                    !e.target.value.endsWith("@gmail.com")
                  ) {
                    setError("Email harus menggunakan @gmail.com");
                  } else {
                    setError("");
                  }
                }}
              />
              {error && <p className="error-text">{error}</p>}
            </div>
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
                if (!newEmail.endsWith("@gmail.com")) {
                  alert("Email harus menggunakan @gmail.com");
                  return;
                }

                dispatch({
                  type: "UPDATE_PROFILE",
                  payload: {
                    email: newEmail,
                  },
                });
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
