import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ReportCard from "../../../components/ReportCard/ReportCard";
import { getAdminReports } from "../../../services/admin";
import "./AdminReports.css";

const AdminReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReports = async () => {
      try {
        const data = await getAdminReports();
        setReports(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  return (
    <div className="admin-layout">
    

      <div className="admin-body">
        <Sidebar />

        <main className="admin-content">
          <h1>System Reports</h1>

          {loading ? (
            <p>Loading reports...</p>
          ) : reports.length === 0 ? (
            <div className="empty-state">
              No reports available.
            </div>
          ) : (
            <div className="reports-grid">
              {reports.map((report) => (
                <ReportCard
                  key={report.id}
                  report={report}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminReports;