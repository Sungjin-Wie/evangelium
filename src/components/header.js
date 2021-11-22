import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Button variant="text" onClick={() => navigate("/")}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ display: { xs: "flex", sm: "block" } }}
          >
            유앙겔리온
          </Typography>
        </Button>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            소개
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            주요사업
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            찾아오는 길
          </Link>
        </nav>
        {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
