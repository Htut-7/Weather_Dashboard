import "../css/Sidebar.css";
import { FaCloudSun, FaMapMarkerAlt, FaCalendarAlt, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <FaCloudSun/>
      </div>

      <div className="nav-links">
        <div className="nav-item active">
          <FaCloudSun/>
          <span>Weather</span>
        </div>

        <div className="nav-item">
          <FaMapMarkerAlt/>
          <span>Cities</span>
        </div>

        <div className="nav-item">
          <FaCalendarAlt/>
          <span>Forecast</span>
        </div>

        <div className="nav-item">
          <FaCog/>
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}
