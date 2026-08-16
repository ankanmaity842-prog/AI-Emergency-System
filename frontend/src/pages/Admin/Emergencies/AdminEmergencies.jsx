import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { getAdminEmergencies } from "../../../services/admin";
import "./AdminEmergencies.css";

const AdminEmergencies = () => {
  const [emergencies, setEmergencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEmergencies = async () => {
      try {
        const data = await getAdminEmergencies();
        setEmergencies(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadEmergencies();
  }, []);

  return (
    <div className="admin-layout">

      <div className="admin-body">
        <Sidebar />

        <main className="admin-content">
          <h1>Emergency Management</h1>

          {loading ? (
            <p>Loading emergencies...</p>
          ) : (
            <div className="emergency-table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Requirements</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {emergencies.map((emergency) => (
                    <tr key={emergency.id}>
                      <td>{emergency.id}</td>

                      <td>{emergency.category}</td>

                      <td>
                        {emergency.description}
                      </td>

                      <td>
                        {emergency.location}
                      </td>

                      <td>
                        {emergency.requirements}
                      </td>

                      <td>
                        {emergency.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminEmergencies;