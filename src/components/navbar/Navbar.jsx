import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item language">
            <LanguageIcon />
            <span>English</span>
          </div>
          <div className="item" title="Dark Mode">
            <DarkModeOutlinedIcon />
          </div>
          <div className="item" title="Fullscreen">
            <FullscreenExitOutlinedIcon />
          </div>
          <div className="item" title="Notifications">
            <NotificationsNoneOutlinedIcon />
            <div className="counter">1</div>
          </div>
          <div className="item" title="Messages">
            <ChatOutlinedIcon />
            <div className="counter">2</div>
          </div>
          <div className="item" title="Menu">
            <ViewListOutlinedIcon />
          </div>
          <div className="item" title="Profile">
            <AccountCircleOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;