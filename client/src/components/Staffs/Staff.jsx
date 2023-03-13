import React from "react";

import { Button } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./StyledTableComponents";

import EditIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomButton = (props) => {
  const { title, color } = props;
  return (
    <Button
      title={title}
      color={color}
      variant="contained"
      style={{
        width: "40px",
        textTransform: "none",
        minHeight: "35px",
        minWidth: "35px",
        height: "40px",
        margin: 2,
      }}
    >
      {props.children}
    </Button>
  );
};

const Staff = ({ staff, index }) => {
  // const [forUpdate, setForUpdate] = useState({});
  return (
    <StyledTableRow spacing={2}>
      {true ? (
        <StyledTableCell sx={{ fontWeight: "bold" }}>{index}</StyledTableCell>
      ) : (
        <StyledTableCell>
          <input type="text" value={index}></input>
        </StyledTableCell>
      )}
      <StyledTableCell align="center">{staff.name}</StyledTableCell>
      <StyledTableCell align="center">{staff.surname}</StyledTableCell>
      <StyledTableCell align="center">{staff.asma}</StyledTableCell>
      <StyledTableCell align="center">{staff.unit}</StyledTableCell>
      <StyledTableCell align="center">{staff.rank}</StyledTableCell>
      <StyledTableCell align="center">{staff.specialization}</StyledTableCell>
      <StyledTableCell align="center">{staff.display_name}</StyledTableCell>
      <StyledTableCell align="center">{staff.mobile_phone}</StyledTableCell>
      <StyledTableCell align="center">{staff.work_phone}</StyledTableCell>
      <StyledTableCell align="center">
        {staff.position_of_responsibility}
      </StyledTableCell>
      <StyledTableCell align="center">{staff.special_category}</StyledTableCell>
      <StyledTableCell align="center">{staff.mta_payment}</StyledTableCell>
      <StyledTableCell align="center">
        <CustomButton title="Επεξεργασία" color="success">
          <EditIcon />
        </CustomButton>
        <CustomButton title="Διαγραφή" color="error">
          <DeleteIcon />
        </CustomButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default Staff;
