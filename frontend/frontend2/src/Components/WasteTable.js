import React from 'react';
import NonRecyc from './tables/NonRecyc';
import RecyTable from './tables/RecyTable';
import { Divider } from "@mui/material";

function wasteTable() {
  return (
      <div>
          <RecyTable />
          <div>
          <Divider sx={{ my: 1 }} />
          </div>
          <NonRecyc />
          
    </div>
  )
}

export default wasteTable
