import {
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getLocalStorage } from "../../store/modules/GetLocalstorageSlace";
import { deletMessag } from "../../store/modules/MessagsSlace";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalDefalt from "../modal/Modal";

const MessagsTable: React.FC = () => {
  const messagsCurrent = useAppSelector(
    (state) => state.GetStorageSlice.messags
  );
  const dispatch = useAppDispatch();

  const delet = useCallback((id: number) => {
    dispatch(deletMessag({ id: id, messag: "", descript: "" }));
    dispatch(getLocalStorage());
  }, []);

  return (
    <>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "16px" }}>Mensagem</TableCell>
                <TableCell sx={{ fontSize: "16px" }}>Descrição</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messagsCurrent.map(
                (item: { id: number; messag: string; descript: string }) => {
                  return (
                    <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell> {item.messag} </TableCell>
                      <TableCell>{item.descript}</TableCell>
                      <TableCell
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                        <ModalDefalt
                          id={item.id}
                          messagEdit={item.messag}
                          descriptEdit={item.descript}
                        />

                        <DeleteIcon
                          onClick={() => delet(item.id)}
                          sx={{ marginRight: "40px", marginLeft: "25px" }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default MessagsTable;
