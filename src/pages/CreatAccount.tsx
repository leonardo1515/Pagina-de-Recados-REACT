import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import FormGeral from "../components/FormGeral/Form";
import { Box } from "@mui/material";

const CreatAccount: React.FC = () => {
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
          titlePage={"Pagina de recados: Criar "}
          handleInputName={"handle"}
          nameButtonJump={"Voltar"}
          nameButtonAction={"criar"}
        />
      </Box>
    </Container>
  );
};

export default CreatAccount;
