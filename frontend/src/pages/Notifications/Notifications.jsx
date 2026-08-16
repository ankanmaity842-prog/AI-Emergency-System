import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import AlertCard from "../../components/AlertCard/AlertCard";
import { getAlerts } from "../../services/alerts";
import "./Notifications.css";

const Notifications = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAlerts = async () => {
      try {
        const data = await getAlerts();
        setAlerts(data || []);
      } catch (error) {
        console.error("Failed to load notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAlerts();
  }, []);

  return (
    <div className="page-layout">
    

      <div className="page-body">
        <Sidebar />

        <main className="page-content">
          <h1>Notifications</h1>

          {loading ? (
            <p>Loading notifications...</p>
          ) : alerts.length === 0 ? (
            <div className="empty-state">
              You don't have any notifications.
            </div>
          ) : (
            <div className="notifications-list">
              {alerts.map((alert) => (
                <AlertCard
                  key={alert.id}
                  alert={alert}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Notifications;