import React from 'react';
import NonRecyc from './tables/NonRecyc';
import RecyTable from './tables/RecyTable';

function wasteTable() {
  return (
      <div>
          <RecyTable />
          <div></div>
          <NonRecyc />
          
    </div>
  )
}

export default wasteTable
