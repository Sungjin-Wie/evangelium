import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import logo from "./logo_mobile.png";

const NavButton = (props) => {
  const { route, text, navigate } = props;
  return (
    <Button variant="text" onClick={() => navigate(route)}>
      <Typography
        variant="body1"
        noWrap
        component="div"
        color="black"
        sx={{ my: 1, mx: 1.5 }}
      >
        {text}
      </Typography>
    </Button>
  );
};

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
            <img
              src={logo}
              alt="euanggelion"
              style={{ height: 50, marginTop: 10 }}
            />
          </Typography>
        </Button>
        <NavButton route="/intro" text="소개" navigate={navigate} />
        <NavButton route="/business" text="주요 사업" navigate={navigate} />
        <NavButton route="/location" text="찾아오는 길" navigate={navigate} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
