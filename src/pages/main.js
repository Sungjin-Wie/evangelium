import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

export default function Main() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <pre style={{ margin: "auto" }}>
          {`유앙겔리온 사이트 메인 페이지입니다. 현재 사이트 제작 중입니다.`}
        </pre>
        <div style={{ height: "600px" }}></div>
      </Container>
    </React.Fragment>
  );
}
