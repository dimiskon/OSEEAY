import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  Icon,
} from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../../assets/110pm_emblem_transparent.png";
import NavbarTypographyTexts from "./NavbarTypographyTexts";
import NavMenu from "./NavMenu";

const pages = [
  { title: "ΑΡΧΙΚΗ", path: "/" },
  { title: "ΠΡΟΣΩΠΙΚΟ", path: "/staffs" },
  { title: "ΟΙΚΗΜΑΤΑ", path: "/houses" },
  { title: "ΑΙΤΗΣΕΙΣ", path: "/requests" },
];

function Navbar() {
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
              id="logo-button"
              href="/"
              startIcon={
                <Icon
                  sx={{
                    width: { md: "7.5rem", xs: "5.5rem" },
                    height: { md: "8rem", xs: "5.5rem" },
                  }}
                >
                  <img width={"100%"} height={"100%"} alt="" src={Logo}></img>
                </Icon>
              }
            ></Button>
            <Box id='logo-texts' display={"flex"} flexDirection="column" pt={3.5}>
              <NavbarTypographyTexts
                variant="h5"
                fontSize={{ md: "1.5rem", xs: "0.7rem" }}
                fontWeight={700}
                text="ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ"
              />
              <NavbarTypographyTexts
                variant="h5"
                fontSize={{ md: "1.5rem", xs: "0.7rem" }}
                fontWeight={700}
                text="110ΠΜ - ΟΣΕΑΑΥ"
              />
              <NavbarTypographyTexts
                variant="h6"
                fontSize={{ md: "1.2rem", xs: "0.7rem" }}
                fontWeight={500}
                fontStyle="italic"
                text="“Μαχιμώτατοι οι ισχύοντες”"
              />
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
            <NavMenu pages={pages}/>
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
export default Navbar;
