import React from "react";

import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

const NavMenu = (props) => {
  const { pages } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map(({ title, path }) => (
          <MenuItem key={title} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "1.3rem",
                  color: "black",
                }}
                to={path}
              >
                {title}
              </Link>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavMenu;
