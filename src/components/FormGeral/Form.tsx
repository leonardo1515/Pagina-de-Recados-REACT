import React, { useRef, useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { newUser } from "../../store/modules/CreatSlace";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Message from "../Alert/Alert";
import { setMessage } from "../../store/modules/AlerSlace";
import { FormProps } from "../TypesComponents/index";
import "./style.css";

const FormGeral: React.FC<FormProps> = ({
  titlePage,
  handleInputName,
  nameButtonJump,
  nameButtonAction,
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const inputName = useRef<HTMLInputElement | undefined>();
  const inputEmail = useRef<HTMLInputElement | undefined>();
  const inputPassword = useRef<HTMLInputElement | undefined>();
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const criaLoga = () => {
    if (location.pathname === "/") {
      const userCurrent = users.find((use: { email: string }) => {
        return use.email === email;
      });

      if (!userCurrent || userCurrent === undefined) {
        dispatch(
          setMessage({
            msg: "Este email não está vinculálo a uma conta",
            type: "error",
          })
        );
        inputEmail.current?.focus();
        return;
      }
      if (email !== userCurrent.email || password !== userCurrent.passwoed) {
        dispatch(
          setMessage({
            msg: "Email ou senha errado.",
            type: "warning",
          })
        );
        inputEmail.current?.focus();
        return;
      }

      sessionStorage.setItem("logged", email);
      navigate("/Messages");
    }

    if (location.pathname === "/CreatAccount") {
      if (email === "" || email.length < 6) {
        dispatch(
          setMessage({
            msg: "Por favor preencha o campo email corretamnente para proseguir.",
            type: "warning",
          })
        );
        inputEmail.current?.focus();
        return;
      }
      if (password === "" || password.length < 5) {
        dispatch(
          setMessage({
            msg: "O campo senha deve conter no minimo 4 digitos.",
            type: "warning",
          })
        );
        inputPassword.current?.focus();
        return;
      }
      if (users.find((use: { email: any }) => use.email === email)) {
        dispatch(setMessage({ msg: "E-mail já cadastrado", type: "error" }));
        inputEmail.current?.focus();
        return;
      }
      dispatch(newUser({ name, email, password }));
      navigate("/");
    }
  };

  const jumpPage = () => {
    if (location.pathname === "/") {
      navigate("/CreatAccount");
    } else {
      navigate("/");
    }
  };

  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "sm",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          margin: "5px",
          maxWidth: "sm",
          minHeight: "500px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            className="icoAnimation"
            sx={{ fontSize: "30px", marginTop: "10px" }}
          >
            {titlePage}
            <MenuBookIcon fontSize="large" />
          </Typography>
          <hr />
        </Grid>
        <Grid item xs={12} className={handleInputName}>
          <TextField
            className="input-animation"
            sx={{ width: "95%" }}
            label="Nome:"
            type="email"
            inputRef={inputName}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="input-animation"
            sx={{ width: "95%" }}
            label="Email:"
            type="email"
            fullWidth
            required
            inputRef={inputEmail}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="input-animation"
            sx={{ width: "95%" }}
            label="Password:"
            type="password"
            fullWidth
            required
            inputRef={inputPassword}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={criaLoga}>
            {nameButtonAction}
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Button variant="contained" onClick={jumpPage}>
            {nameButtonJump}
          </Button>
          <Message />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FormGeral;
