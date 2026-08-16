import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import AlertCard from "../../../components/AlertCard/AlertCard";
import { getAdminAlerts } from "../../../services/admin";
import "./AdminAlerts.css";

const AdminAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAlerts = async () => {
      try {
        const data = await getAdminAlerts();
        setAlerts(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadAlerts();
  }, []);

  return (
    <div className="admin-layout">

      <div className="admin-body">
        <Sidebar />

        <main className="admin-content">
          <h1>Emergency Alerts</h1>

          {loading ? (
            <p>Loading alerts...</p>
          ) : alerts.length === 0 ? (
            <div className="empty-state">
              No emergency alerts.
            </div>
          ) : (
            <div className="admin-alert-list">
              {alerts.map((alert) => (
                <AlertCard
                  key={alert.id}
                  alert={alert}
                  adminView
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminAlerts;