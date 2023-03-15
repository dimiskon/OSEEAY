import React, { useState, useEffect } from "react";
import axios from "axios";
import AddNewStaffButton from "../../components/Staffs/AddNewStaffButton";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Paper,
  TextField,
} from "@mui/material";
import StaffTableColNames from "../../components/Staffs/StaffTableCols";
import Staff from "../../components/Staffs/Staff";

const StaffsMUi = () => {
  // Staffs Data
  const [staffs, setStaffs] = useState([]);
  const [searchQ, setSearchQ] = useState("");

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [allItems, setAllItems] = useState(0);

  const staffsData = async () => {
    const { data } = await axios.get(
      `/staffs?limit=${rowsPerPage}&page=${page}&asma=${searchQ}`
    );
    setStaffs(data.staffs);
    setAllItems(data.totalItems);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (e) => {
    setSearchQ(e.target.value);
  };

  useEffect(() => {
    staffsData();
  }, [page, rowsPerPage, searchQ]);

  return (
    <Box sx={{ p: 3, width: "95%" }}>
      <Box sx={{ m: 2, display: "flex", justifyContent: "flex-end" }}>
        <TextField
          onChange={handleSearch}
          label="Αναζήτηση..."
          variant="filled"
          sx={{ width: "24rem" }}
        />
        <AddNewStaffButton />
      </Box>
      <TableContainer component={Paper} sx={{ minWidth: "700px" }}>
        <Table stickyHeader>
          <StaffTableColNames />
          <TableBody>
            {staffs.map((staff, index) => (
              <Staff key={staff.asma} staff={staff} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={allItems}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default StaffsMUi;
