import { Grid } from "@mui/material";
import React from "react";

interface PerfilProps {
  email: string;
}

const Perfil: React.FC<PerfilProps> = ({ email }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {email}
        </Grid>
      </Grid>
    </>
  );
};

export default Perfil;
