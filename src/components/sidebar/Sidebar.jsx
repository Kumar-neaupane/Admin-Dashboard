import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">AdminPanel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main </p>
          <li>
            <DashboardIcon className="icons" />
            <span>Dashboard</span>
          </li>

          <p className="title">List </p>
          <li>
            <GroupIcon className="icons" />
            <span>Users</span>
          </li>
          <li>
            <CategoryOutlinedIcon className="icons" />
            <span>Products</span>
          </li>
          <li>
            <ViewListOutlinedIcon className="icons" />
            <span>Orders</span>
          </li>
          <p className="title">Useful </p>
          <li>
            <SignalCellularAltOutlinedIcon className="icons" />
            <span>Stats</span>
          </li>

          <li>
            <CircleNotificationsOutlinedIcon className="icons" />
            <span>Notifications</span>
          </li>
          <p className="title">Service </p>
          <li>
            <HealthAndSafetyOutlinedIcon className="icons" />
            <span>System Health</span>
          </li>

          <li>
            <PsychologyOutlinedIcon className="icons" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icons" />
            <span>Settings</span>
          </li>
          <p className="title">user </p>
          <li>
            <AccountCircleOutlinedIcon className="icons" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icons" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
