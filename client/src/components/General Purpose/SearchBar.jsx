import React from "react";

import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const { handleSearch } = props;
  return (
    <TextField
      className="search-bar"
      onChange={handleSearch}
      label="Προσωπικό ΟΣΕΑΑΥ"
      placeholder="Αναζήτηση..."
      variant="filled"
      autoFocus={true}
      sx={{ width: "24rem" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
