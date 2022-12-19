import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import FormGeral from "../components/FormGeral/Form";
import { Box } from "@mui/material";
import "./style.css";

const Login: React.FC = () => {
  const emailCurrent = sessionStorage.getItem("logged");
  const navigate = useNavigate();
  useEffect(() => {
    if (emailCurrent) {
      navigate("/Messages");
    }
  }, [emailCurrent, navigate]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <FormGeral
          titlePage={"Pagina de recados: Login "}
          handleInputName={"no-handle"}
          nameButtonJump={"Criar"}
          nameButtonAction={"Entrar"}
        />
      </Box>
    </Container>
  );
};

export default Login;
