import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../hooks/useAuth";
import "./Profile.css";

const Profile = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Connect to profile update API here.
    console.log("Profile update:", formData);
  };

  return (
    <div className="page-layout">

      <div className="page-body">
        <Sidebar />

        <main className="page-content">
          <h1>My Profile</h1>

          <div className="profile-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                />
              </div>

              <div className="form-group">
                <label>Phone</label>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Address</label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">
                Update Profile
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;