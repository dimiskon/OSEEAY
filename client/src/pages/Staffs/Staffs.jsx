import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddNewStaffButton from '../../components/Staffs/AddNewStaffButton';
import { Table, TableBody, TableContainer, TablePagination, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import StaffTableColNames from '../../components/Staffs/StaffTableCols';
import Staff from '../../components/Staffs/Staff';

const StaffsMUi = () => {
  // Staffs Data
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    staffsData();
  }, []);

  const staffsData = async () => {
    const { data } = await axios.get('/staffs');
    setStaffs(data);
  };

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{
      p: 3,
      width: '95%'
    }}>
      <Box sx={{
        m: 2,
        display: 'flex',
        gap: '10px',
        justifyItems: 'flex-start'
      }}>
        <AddNewStaffButton />
        <TextField label='Search...' variant='outlined' />
      </Box>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 700 }}>
          <StaffTableColNames />
          <TableBody>
            {staffs.map((staff, index) => (
              <Staff key={staff.asma} staff={staff} index={index}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={staffs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}

export default StaffsMUi;