import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import EmergencyCard from "../../components/EmergencyCard/EmergencyCard";
import { createEmergency } from "../../services/emergency";
import "./Emergency.css";

const Emergency = () => {
  const [formData, setFormData] = useState({
    category: "medical",
    description: "",
    location: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await createEmergency(formData);

      console.log("Emergency created:", response);

      setSuccess(
        "Emergency reported successfully. Help is being coordinated."
      );

      setFormData({
        category: "medical",
        description: "",
        location: "",
        requirements: "",
      });
    } catch (err) {
      setError(
        err?.response?.data?.detail ||
          "Unable to create emergency."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-layout">
    

      <div className="page-body">
        <Sidebar />

        <main className="page-content emergency-page">
          <h1>Report Emergency</h1>

          <p className="page-description">
            Provide the emergency details so the response
            team can coordinate appropriate assistance.
          </p>

          {success && (
            <div className="success-message">
              {success}
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="emergency-container">
            <form
              className="emergency-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label>Emergency Type</label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="medical">
                    Medical Emergency
                  </option>

                  <option value="accident">
                    Accident
                  </option>

                  <option value="fire">
                    Fire
                  </option>

                  <option value="flood">
                    Flood
                  </option>

                  <option value="disaster">
                    Natural Disaster
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Short Description</label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the emergency..."
                  required
                />
              </div>

              <div className="form-group">
                <label>Location</label>

                <textarea
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter village, landmark, address, PIN code..."
                  required
                />
              </div>

              <div className="form-group">
                <label>Requirements</label>

                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Example: Ambulance, hospital, shelter..."
                  required
                />
              </div>

              <button
                type="submit"
                className="emergency-submit"
                disabled={loading}
              >
                {loading
                  ? "Sending Emergency..."
                  : "Report Emergency"}
              </button>
            </form>

            <EmergencyCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Emergency;