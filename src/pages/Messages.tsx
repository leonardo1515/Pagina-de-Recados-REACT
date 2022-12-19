import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { creaatNewMessag } from "../store/modules/MessagsSlace";
import { getLocalStorage } from "../store/modules/GetLocalstorageSlace";
import MessagsTable from "../components/Table/MessagsTable";
import PositionedMenu from "../components/Menu/Menu";
import Message from "../components/Alert/Alert";
import { setMessage } from "../store/modules/AlerSlace";
import theme from "../config/theme/Default";

const Messags: React.FC = () => {
  const [messag, setMessag] = useState<string>("");
  const [descript, setDescript] = useState<string>("");
  const inputMessag = useRef<HTMLInputElement | undefined>();
  const inputDescript = useRef<HTMLInputElement | undefined>();
  const emailCurrent = sessionStorage.getItem("logged");
  const nameCurrent = useAppSelector((state) => state.GetStorageSlice.name);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (emailCurrent === null || emailCurrent === "") {
      navigate("/");
    }
  }, [emailCurrent, navigate]);

  useEffect(() => {
    dispatch(getLocalStorage());
  }, []);

  const newMessag = () => {
    if (messag.length < 4) {
      dispatch(
        setMessage({
          msg: "O campo mensagem deve ter no minimo 4 cracteres.",
          type: "warning",
        })
      );
      inputMessag.current?.focus();
      return;
    }
    if (descript.length < 4) {
      dispatch(
        setMessage({
          msg: "O campo descrição deve ter no minimo 4 cracteres.",
          type: "warning",
        })
      );
      inputDescript.current?.focus();
      return;
    }
    dispatch(
      creaatNewMessag({ id: Math.floor(Date.now() / 10000), messag, descript })
    );

    dispatch(getLocalStorage());
    dispatch(setMessage({ msg: "Nova mensagem adicionada.", type: "success" }));
    setMessag("");
    setDescript("");
  };

  const exitPage = () => {
    sessionStorage.removeItem("logged");
    navigate("/");
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          xs={10}
          sx={{
            paddingBottom: "5px",
            backgroundColor: "rgb(43, 56, 91)",
            color: "rgb(221, 221, 229)",
          }}
        >
          <Typography
            className="animation-name-user"
            variant={smDown ? "h5" : "h3"}
          >
            Olá, {nameCurrent}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "end",
            marginTop: "8px",
            backgroundColor: "rgb(43, 56, 91)",
          }}
        >
          <PositionedMenu exitPage={exitPage} />
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "95%" }}
            label="Mensagem:"
            type="text"
            required
            value={messag || ""}
            inputRef={inputMessag}
            onChange={(e) => setMessag(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "95%" }}
            label="Descrição:"
            type="text"
            fullWidth
            required
            value={descript || ""}
            inputRef={inputDescript}
            onChange={(e) => setDescript(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ marginTop: "10px" }}
            variant="contained"
            onClick={newMessag}
          >
            Salvar
          </Button>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <MessagsTable />
          <Message />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Messags;
