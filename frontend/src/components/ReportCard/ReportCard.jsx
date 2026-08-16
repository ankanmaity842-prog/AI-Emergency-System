import React from "react";
import {
  FileText,
  MapPin,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
} from "lucide-react";

import "./ReportCard.css";

const ReportCard = ({ report, onView }) => {
  if (!report) return null;

  const {
    id,
    report_id,
    title,
    description,
    category,
    status,
    location,
    created_at,
    date,
    time,
  } = report;

  const reportId = report_id || id;

  const getStatusClass = () => {
    switch (status?.toLowerCase()) {
      case "resolved":
      case "completed":
        return "status-resolved";

      case "active":
      case "in_progress":
      case "in progress":
        return "status-active";

      case "cancelled":
      case "canceled":
        return "status-cancelled";

      default:
        return "status-pending";
    }
  };

  const getStatusIcon = () => {
    switch (status?.toLowerCase()) {
      case "resolved":
      case "completed":
        return <CheckCircle size={15} />;

      case "cancelled":
      case "canceled":
        return <XCircle size={15} />;

      default:
        return <AlertTriangle size={15} />;
    }
  };

  return (
    <div className="report-card">
      {/* Header */}
      <div className="report-card-header">
        <div className="report-title-section">
          <div className="report-icon">
            <FileText size={22} />
          </div>

          <div>
            <h3>{title || "Emergency Report"}</h3>

            {reportId && (
              <span className="report-id">
                Report #{reportId}
              </span>
            )}
          </div>
        </div>

        <div className={`report-status ${getStatusClass()}`}>
          {getStatusIcon()}
          <span>{status || "Pending"}</span>
        </div>
      </div>

      {/* Category */}
      {category && (
        <div className="report-category">
          {category}
        </div>
      )}

      {/* Description */}
      {description && (
        <div className="report-description">
          <p>{description}</p>
        </div>
      )}

      {/* Report Details */}
      <div className="report-details">

        {location && (
          <div className="report-detail">
            <MapPin size={17} />
            <div>
              <span className="detail-label">Location</span>
              <span className="detail-value">{location}</span>
            </div>
          </div>
        )}

        {(date || created_at) && (
          <div className="report-detail">
            <Calendar size={17} />
            <div>
              <span className="detail-label">Date</span>
              <span className="detail-value">
                {date || new Date(created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        )}

        {(time || created_at) && (
          <div className="report-detail">
            <Clock size={17} />
            <div>
              <span className="detail-label">Time</span>
              <span className="detail-value">
                {time ||
                  new Date(created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {onView && (
        <div className="report-card-footer">
          <button
            type="button"
            className="view-report-btn"
            onClick={() => onView(report)}
          >
            <Eye size={17} />
            View Report
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportCard;