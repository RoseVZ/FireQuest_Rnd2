import React from 'react';
import NonRecyc from './tables/NonRecyc';
import RecyTable from './tables/RecyTable';
import { Divider,Button } from "@mui/material";

function wasteTable() {
  return (
      <div>
          <RecyTable />
          <div>
          
          </div>
          <NonRecyc />
          <Divider sx={{ my: 1 }} />
          <Button variant="contained" color='success'>Add Wastes</Button>
    </div>
  )
}

export default wasteTable
