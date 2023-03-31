import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name,Tag,Weight,RecyclingCenters,CollectionPoint) {
  return { name,Tag,Weight,RecyclingCenters,CollectionPoint};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/recyclableWaste");
    const res = await response.data;
    
    setData(res);
  };
  useEffect(() => {
    fetchData();
  }, []);


  console.log(data)

  const delete1 = (id) => {
    console.log(id)
    axios.delete(`http://localhost:8000/api/deleteWaste/${id}`);
    window.location.reload(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Recyclable Wastes</StyledTableCell>
            
            <StyledTableCell align="right">Tag</StyledTableCell>
            <StyledTableCell align="right">Weight&nbsp;(tonne)</StyledTableCell>
            <StyledTableCell align="right">RecyclingCenters</StyledTableCell>
            <StyledTableCell align="right">CollectionPoint</StyledTableCell>
            <StyledTableCell align="right">Delete Data</StyledTableCell>
            <StyledTableCell align="right">Update Data</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.wstno}>
              <StyledTableCell component="th" scope="row">
                {row.type}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Tag}</StyledTableCell>
              <StyledTableCell align="right">{row.weight}</StyledTableCell>
              <StyledTableCell align="right">{row.RecyclingCenters}</StyledTableCell>
              <StyledTableCell align="right">{row.CollectionPoints}</StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="outlined" color='error'onClick={() => delete1(row?.wstno)}>Delete</Button>
              </StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="outlined" >Edit Amount</Button>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}