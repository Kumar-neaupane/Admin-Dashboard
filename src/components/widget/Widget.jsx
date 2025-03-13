import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

const Widget = ({ type }) => {
  let data;
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon 
            className="icon" 
            style={{
              color: "#5574ff",
              backgroundColor: "rgba(85, 116, 255, 0.12)"
            }} 
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <AddShoppingCartOutlinedIcon 
            className="icon" 
            style={{
              color: "#ff6a95",
              backgroundColor: "rgba(255, 106, 149, 0.12)"
            }} 
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <PaidOutlinedIcon 
            className="icon" 
            style={{
              color: "#41b883",
              backgroundColor: "rgba(65, 184, 131, 0.12)"
            }} 
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon 
            className="icon" 
            style={{
              color: "#b45bff",
              backgroundColor: "rgba(180, 91, 255, 0.12)"
            }} 
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          <span>{diff}%</span>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;