import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { Copyright } from ".";

const footers = [
  {
    title: "",
    description: [
      "주소: (22689) 인천광역시 서구 정서진로 410",
      "환경산업연구단지 B동 110호",
      "E-mail: master@euanggelion.com",
      "전화번호: 070-4234-3313",
    ],
  },
];

const Footer = () => {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      {footers.map((footer) => (
        <Grid item xs={12} sm={6} key={footer.title}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            {footer.title}
          </Typography>
          <ul>
            {footer.description.map((item) => (
              <li key={item}>
                <div variant="subtitle1" style={{ color: "grey" }}>
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Footer;
