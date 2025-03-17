import "./datatable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from '../../datatablesource';

const Datatable = () => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        User Management
        <button className="addButton">Add New User</button>
      </div>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 12 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        getRowClassName={(params) => `status-${params.row.status}`}
      />
    </div>
  );
};

export default Datatable;