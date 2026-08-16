import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getEmergencyHistory } from "../../services/history";
import "./History.css";

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await getHistory();
        setHistory(data || []);
      } catch (error) {
        console.error("Failed to load history:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  return (
    <div className="page-layout">
      

      <div className="page-body">
        <Sidebar />

        <main className="page-content">
          <h1>Emergency History</h1>

          {loading ? (
            <p>Loading history...</p>
          ) : history.length === 0 ? (
            <div className="empty-state">
              No emergency history found.
            </div>
          ) : (
            <div className="history-list">
              {history.map((item) => (
                <div
                  className="history-card"
                  key={item.id}
                >
                  <div>
                    <h3>{item.category}</h3>

                    <p>{item.description}</p>

                    <small>
                      {item.location}
                    </small>
                  </div>

                  <span className={`status ${item.status}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default History;