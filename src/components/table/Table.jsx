import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.scss";

const rows = [
    { id: 1, product: "Laptop", name: "Kumar Neupane", amount: 200000, status: "Pending", img: "https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg" },
    { id: 2, product: "TV", name: "Ranjit Khadka", amount: 150000, status: "Pending", img: "https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg" },
    { id: 3, product: "Apple", name: "Hari Neupane", amount: 50000, status: "Pending", img: "https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg" },
    { id: 4, product: "Mobile", name: "Shyam Neupane", amount: 100000, status: "Pending", img: "https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg" },
    { id: 5, product: "Laptop", name: "Ram Neupane", amount: 300000, status: "Complete", img: "https://cdn.mos.cms.futurecdn.net/3kcgKLkfPRbskpsYzW239d.jpg" },
];

const CustomTable = () => {
    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Product ID</TableCell>
                        <TableCell align="right">Product</TableCell>
                        <TableCell align="right">Customer</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">
                                <div className='cellWrapper'>
                                    <img src={row.img} className='image' alt={row.product} />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">
                                <span 
                                    style={{ 
                                        backgroundColor: row.status === "Pending" ? "#FFEB3B" : row.status === "Complete" ? "#4CAF50" : "transparent",
                                        color: row.status === "Pending" ? "#000000" : row.status === "Complete" ? "#FFFFFF" : "inherit",
                                        padding: "3px 8px",
                                        borderRadius: "5px"
                                    }}
                                >
                                    {row.status}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
