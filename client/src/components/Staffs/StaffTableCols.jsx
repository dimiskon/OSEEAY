import React from "react";
import { TableHead } from "@mui/material";
import { StyledTableRow, StyledTableCell } from "./StyledTableComponents";

const colNames = [
  "S/R",
  "ΟΝΟΜΑ",
  "ΕΠΩΝΥΜΟ",
  "ΑΣΜΑ",
  "ΣΩΜΑ",
  "ΒΑΘΜΟΣ",
  "ΕΙΔΙΚΟΤΗΤΑ",
  "ΠΑΡΟΥΣΙΑΣΤΙΚΟ",
  "ΚΙΝΗΤΟ ΤΗΛΕΦΩΝΟ",
  "ΥΠΗΡΕΣΙΑΚΟ ΤΗΛΕΦΩΝΟ",
  "ΘΕΣΗ ΕΥΘΥΝΗΣ",
  "ΕΙΔΙΚΗ ΚΑΤΗΓΟΡΙΑ",
  "ΠΛΗΡΩΜΗ ΜΤΑ",
  "ΕΠΙΛΟΓΕΣ",
];

const StaffTableColNames = () => {
  return (
    <TableHead>
      <StyledTableRow align="center">
        {colNames.map((name) => (
          <StyledTableCell align="center" key={name}>
            {name}
          </StyledTableCell>
        ))}
      </StyledTableRow>
    </TableHead>
  );
};

export default StaffTableColNames;
