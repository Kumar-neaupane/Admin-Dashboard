import './components/datatable/datatable.scss';
import {Link} from "react-router-dom"

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`statusCell ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: () => {
      return (
        <div className="cellActions">
        <Link to="/user/test" style={{textDecoration:"none"}}>
          <button className="viewButton" >View</button>
          </Link>
          <button className="deleteButton" >Delete</button>
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 2,
    username: "john_doe",
    img: "https://example.com/john.jpg",
    status: "inactive",
    email: "john@example.com",
    age: 25,
  },
  {
    id: 3,
    username: "emma_smith",
    img: "https://tmssl.akamaized.net/images/foto/galerie/cristiano-ronaldo-im-trikot-von-portugal-1718197560-139337.jpg",
    status: "active",
    email: "emma@example.com",
    age: 28,
  },
  {
    id: 4,
    username: "alex_jones",
    img: "https://example.com/alex.jpg",
    status: "active",
    email: "alex@example.com",
    age: 30,
  },
  {
    id: 5,
    username: "sophia_brown",
    img: "https://example.com/sophia.jpg",
    status: "inactive",
    email: "sophia@example.com",
    age: 27,
  },
  {
    id: 6,
    username: "michael_jordan",
    img: "https://example.com/michael.jpg",
    status: "active",
    email: "michael@example.com",
    age: 35,
  },
  {
    id: 7,
    username: "olivia_wilson",
    img: "https://example.com/olivia.jpg",
    status: "inactive",
    email: "olivia@example.com",
    age: 24,
  },
  {
    id: 8,
    username: "daniel_miller",
    img: "https://example.com/daniel.jpg",
    status: "active",
    email: "daniel@example.com",
    age: 29,
  },
  {
    id: 9,
    username: "ava_davis",
    img: "https://example.com/ava.jpg",
    status: "active",
    email: "ava@example.com",
    age: 26,
  },
  {
    id: 10,
    username: "william_clark",
    img: "https://example.com/william.jpg",
    status: "inactive",
    email: "william@example.com",
    age: 31,
  },
  {
    id: 11,
    username: "mia_anderson",
    img: "https://example.com/mia.jpg",
    status: "active",
    email: "mia@example.com",
    age: 23,
  },
];