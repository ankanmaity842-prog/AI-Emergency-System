import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ReportCard from "../../components/ReportCard/ReportCard";
import { getReports } from "../../services/reports";
import "./Reports.css";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReports = async () => {
      try {
        const data = await getReports();
        setReports(data || []);
      } catch (error) {
        console.error("Failed to load reports:", error);
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  return (
    <div className="page-layout">


      <div className="page-body">
        <Sidebar />

        <main className="page-content">
          <h1>Reports</h1>

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

export default Reports;