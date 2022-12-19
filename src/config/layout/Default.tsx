import React from "react";
import { Container } from "@mui/material";

interface DefaultLayoutProps {
  page: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ page }) => {
  return (
    <>
      <Container
        maxWidth="lg"
        fixed
        sx={{
          paddingBottom: "20px",
          marginTop: "100px",
        }}
      >
        {page}
      </Container>
    </>
  );
};

export default DefaultLayout;
