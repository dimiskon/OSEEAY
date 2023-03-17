import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PeopleOutlineTwoToneIcon from "@mui/icons-material/PersonAddAlt1Rounded";

const AddNewStaffButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/staffs/create")}
      variant="contained"
      title="Προσθήκη Προσωπικού"
    >
      <PeopleOutlineTwoToneIcon
        style={{
          fontSize: "2rem",
        }}
      />
    </Button>
  );
};

export default AddNewStaffButton;
