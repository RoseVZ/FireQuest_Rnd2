import React from 'react';
import NonRecyc from './tables/NonRecyc';
import RecyTable from './tables/RecyTable';
import { Divider, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import axios from 'axios';
export default function WasteTable() {
    const navigate = useNavigate()
    const goto = () => {
        navigate(`/display`)
    }
    const delete1 = () => {
        axios.delete(`http://localhost:8000/api/deleteRecyclableWaste`);
        window.location.reload(false);
    }

    const delete2 = () => {
        axios.delete(`http://localhost:8000/api/deleteNonRecyclableWaste`);
        window.location.reload(false);
    }

   
  return (
      <div>
          <RecyTable />
          <Button variant="contained" color='secondary'  onClick={() => delete1()} >Send to Recycler</Button>
          <div>
          <Divider sx={{ my: 1 }} />
          
          </div>
          <NonRecyc />
          <Button variant="contained" color='secondary' onClick={() => delete2()}>Send to Treatment Center</Button>
          <Divider sx={{ my: 1 }} />
          <Button variant="contained" color='success' href='/addwaste'>Add Wastes</Button>
    </div>
  )
}

