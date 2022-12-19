import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { edite } from "../../store/modules/EditSlace";
import { getLocalStorage } from "../../store/modules/GetLocalstorageSlace";
import Message from "../Alert/Alert";
import { setMessage } from "../../store/modules/AlerSlace";
import EditIcon from "@mui/icons-material/Edit";
import { ModalProps } from "../TypesComponents/index";

const ModalDefalt: React.FC<ModalProps> = ({
  messagEdit,
  descriptEdit,
  id,
}) => {
  const [editeMessag, setEditeMessag] = useState<string>("");
  const [editeDescript, setEditeDescript] = useState<string>("");
  const inputEditeMessag = useRef<HTMLInputElement | undefined>();
  const inputEditeDescript = useRef<HTMLInputElement | undefined>();
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const saveEdite = useCallback(() => {
    if (editeMessag.length < 4) {
      dispatch(
        setMessage({
          msg: "O campo mensagem deve ter no minimo 4 caracteres.",
          type: "warning",
        })
      );
      inputEditeMessag.current?.focus();
      return;
    }
    if (editeDescript.length < 4) {
      dispatch(
        setMessage({
          msg: "O campo descrição deve ter no minimo 4 caracteres.",
          type: "warning",
        })
      );
      inputEditeDescript.current?.focus();
      return;
    }
    dispatch(
      edite({
        index: id,
        editMessag: editeMessag,
        editMDescript: editeDescript,
      })
    );
    dispatch(
      setMessage({ msg: "Mensagem editada com sucesso.", type: "success" })
    );
    setOpen(false);
    dispatch(getLocalStorage());
  }, [editeMessag, editeDescript]);

  return (
    <>
      <EditIcon onClick={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box component={Paper} position="absolute" top="10%" left="10%" sx={{}}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "40px",
                  textAlign: "center",
                  paddingBottom: "40px",
                  backgroundColor: "rgb(43, 56, 91)",
                  color: "rgb(221, 221, 229)",
                }}
              >
                Editar
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ marginLeft: "10px", width: "95%" }}
                type="text"
                label="Mensagem"
                required
                inputRef={inputEditeMessag}
                onChange={(e) => setEditeMessag(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ marginLeft: "10px", width: "95%" }}
                type="text"
                label="Descrição"
                required
                inputRef={inputEditeDescript}
                onChange={(e) => setEditeDescript(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={3}>
              <Button
                sx={{ marginLeft: "20px" }}
                variant="contained"
                onClick={saveEdite}
              >
                Salvar
              </Button>
            </Grid>
            <Grid item xs={9}>
              <Button
                sx={{ marginBottom: "30px" }}
                variant="contained"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
              <Message />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ModalDefalt;
