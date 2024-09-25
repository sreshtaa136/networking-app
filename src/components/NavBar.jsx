"use client";

import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Divider,
  Container,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "@/components/nav/NavLinks.jsx";
import NavRight from "./nav/NavRight";
import { TEXT_GRADIENT_STYLING } from "@/utils/constants";

const pages = ["HOST", "SPONSOR", "FIND EVENTS", "LOG IN", "SIGN UP"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <Container maxWidth="false" disableGutters>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "transparent",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          {/* NAV LEFT */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={4}
            sx={{ flexGrow: 1 }}
          >
            <Link href={"/"}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: 500,
                  fontSize: {
                    md: 34,
                    sm: 28,
                    xs: 26,
                  },
                  ...TEXT_GRADIENT_STYLING,
                }}
              >
                LOGO
              </Typography>
            </Link>
            {/* PAGE LINKS */}
            <NavLinks />
          </Stack>
          {/* NAV RIGHT */}
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <NavRight />
          </Stack>
          {/* RESPONSIVE BURGER MENU */}
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              ":hover": {
                cursor: "not-allowed",
              },
            }}
            style={{
              cursor: "not-allowed",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {!anchorElNav ? (
                <MenuIcon />
              ) : (
                <CloseIcon
                  sx={{
                    ":hover": {
                      cursor: "not-allowed",
                    },
                  }}
                />
              )}
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
                display: { xs: "block", sm: "none" },
                marginTop: "-10px",
                marginLeft: "-23px",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: {
                      sm: "none",
                    },
                  }}
                >
                  <Link
                    style={{
                      color: "#000",
                    }}
                    href={`/${page.toLowerCase().split(" ").join("")}`}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Divider sx={{ borderColor: "white", opacity: 0.1 }} /> */}
    </Container>
  );
}
