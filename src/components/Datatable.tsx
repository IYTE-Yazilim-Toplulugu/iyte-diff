import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { User } from '@/models/User';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullName', headerName: 'Full Name', width: 130 },
  { field: 'schoolNumber', headerName: 'School Number', width: 130 },
  { field: 'department', headerName: 'Department', width: 130 },
  { field: 'grade', headerName: 'Grade', width: 130 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'password', headerName: 'Password', width: 130 },
  { field: 'userRole', headerName: 'Role', width: 130 },
];

const paginationModel = { page: 0, pageSize: 20 };

const Datatable = ({ rows } : { rows : User[] | any }) => {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  )
}

export default Datatable