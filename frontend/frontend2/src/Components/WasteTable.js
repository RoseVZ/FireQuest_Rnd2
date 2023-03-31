import React from 'react';
import NonRecyc from './tables/NonRecyc';
import RecyTable from './tables/RecyTable';
import { Divider, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";


export default function WasteTable() {
    const navigate = useNavigate()
    const goto = () => {
        navigate(`/display`)
    }
  return (
      <div>
          <RecyTable />
          <div>
          
          </div>
          <NonRecyc />
          <Divider sx={{ my: 1 }} />
          <Button variant="contained" color='success' href='/addwaste'>Add Wastes</Button>
    </div>
  )
}

