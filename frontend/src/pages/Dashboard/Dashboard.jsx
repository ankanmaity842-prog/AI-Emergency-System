import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChatBox from "../../components/ChatBox/ChatBox";
import EmergencyCard from "../../components/EmergencyCard/EmergencyCard";
import AlertCard from "../../components/AlertCard/AlertCard";
import LocationCard from "../../components/LocationCard/LocationCard";
import NotificationBell from "../../components/NotificationBell/NotificationBell";
import { getAlerts } from "../../services/alerts";
import "./Dashboard.css";

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const loadAlerts = async () => {
      try {
        const data = await getAlerts();
        setAlerts(data || []);
      } catch (error) {
        console.error("Failed to load alerts:", error);
      }
    };

    loadAlerts();
  }, []);

  return (
    <div className="dashboard-layout">


      <div className="dashboard-body">
        <Sidebar />

        <main className="dashboard-main">
          <div className="dashboard-header">
            <div>
              <h1>Safe Guardian</h1>
              <p>
                Your AI-powered emergency and safety assistant.
              </p>
            </div>

            <NotificationBell />
          </div>

          <section className="dashboard-grid">
            <EmergencyCard />

            <LocationCard />

            <div className="alerts-section">
              <h2>Recent Alerts</h2>

              {alerts.length === 0 ? (
                <p className="empty-state">
                  No active alerts.
                </p>
              ) : (
                alerts.map((alert) => (
                  <AlertCard
                    key={alert.id}
                    alert={alert}
                  />
                ))
              )}
            </div>
          </section>

          <section className="chat-section">
            <ChatBox />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;