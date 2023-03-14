import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Icon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import Logo from "../assets/110pm_emblem_transparent.png";

const pages = [
  { title: "ΑΡΧΙΚΗ", path: "/" },
  { title: "ΠΡΟΣΩΠΙΚΟ", path: "/staffs" },
  { title: "ΟΙΚΗΜΑΤΑ", path: "/houses" },
  { title: "ΑΙΤΗΣΕΙΣ", path: "/requests" },
];

function NavbarMUi() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <Box
            id="left-box"
            href="/"
            style={{
              width: "50%",
              display: "flex",
            }}
          >
            <Button
              href="/"
              startIcon={
                <Icon
                  sx={{
                    width: { md: "8rem", xs: "5.5rem" },
                    height: { md: "8rem", xs: "5.5rem" },
                  }}
                >
                  <img width={"100%"} height={"100%"} alt="" src={Logo}></img>
                </Icon>
              }
            ></Button>
            <Box display={"flex"} flexDirection="column" pt={3}>
              <Typography
                variant="h5"
                component="a"
                sx={{
                  fontSize: { md: "1.5rem", xs: "0.7rem" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ
              </Typography>
              <Typography
                variant="h5"
                component="a"
                sx={{
                  fontSize: { md: "1.5rem", xs: ".7rem" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                110ΠΜ - ΟΣΕΑΑΥ
              </Typography>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  fontSize: { md: "1.2rem", xs: ".7rem" },
                  fontWeight: 500,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                “Μαχιμώτατοι οι ισχύοντες”
              </Typography>
            </Box>
          </Box>
          <Box
            id="mid-box"
            justifyContent="end"
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
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
          </Box>
          <Box
            id="right-box"
            sx={{
              display: {
                flexGrow: 1,
                xs: "none",
                md: "flex",
              },
              width: "50%",
              justifyContent: "end",
            }}
          >
            {pages.map(({ title, path }) => (
              <Button
                key={title}
                onClick={handleCloseNavMenu}
                sx={{
                  mr: 2,
                  color: "white",
                  display: "block",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    color: "white",
                  }}
                  to={path}
                >
                  {title}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarMUi;
