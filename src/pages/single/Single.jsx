import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from '../../components/table/Table';


const Single = () => {
  return (
    <div className="single">
      <Sidebar />

      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
          <div className="edit">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://imgs.search.brave.com/rnKTKEEDCg6IUi-V3cpQV8hE1pA8RNudvsVYrrKLQKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC9hLzgv/Yy8xMDExNjEtMzg0/MHgyMTYwLWRlc2t0/b3AtNGstY3Jpc3Rp/YW5vLXJvbmFsZG8t/d2FsbHBhcGVyLXBo/b3RvLmpwZw"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Ronaldo</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">ronaldo@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">0987654321</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Kathmandu Nepal</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Nepal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title={"User Spending (Last 6 months)"}/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
