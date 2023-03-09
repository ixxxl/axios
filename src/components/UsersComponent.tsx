import { Button, IconButton, Snackbar, Stack } from "@mui/material";
import { padding } from "@mui/system";
import { useEffect, useState } from "react";
import { IUsers } from "../models/userModels";
import { useAxiosGet } from "../services/axiosGET";
import { WrapperDialog } from "./WrapperDialog";
import CloseIcon from "@mui/icons-material/Close";
import { WrapperChange } from "./WrapperChange";

const UsersComponent = () => {
  const [open, setOpen] = useState(false);

  const [users, setUsers] = useState<IUsers[]>([]);
  const [stateModalWindow, setStateModalWindow] = useState<boolean>(false);
  const [stateChangeWindows, setStateChangeWindow] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const openModalWindowHandler = () => {
    setStateModalWindow(true);
  };

  const openWrapperChange = () => {
    setStateChangeWindow(true);
  };

  const closeModalWindowHandler = () => {
    setStateModalWindow(false);
  };

  const getNewUser = (u: IUsers) => {
    setUsers((state) => [...state, u]);
    setOpen(true);
  };

  const { data, error, loaded } = useAxiosGet(`http://localhost:3020/users`);
  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <>
      <hr />
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          paddingLeft: "20px",
        }}
        direction="row"
      >
        <Button onClick={openModalWindowHandler} variant="contained">
          Add User
        </Button>
        <Button onClick={openModalWindowHandler} variant="contained">
          Change User
        </Button>
        <Button onClick={openWrapperChange} variant="contained">
          Remove User
        </Button>
        <div>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Item added"
            action={action}
          />
        </div>
      </Stack>
      <hr />
      <pre> {JSON.stringify(users, null, 2)}</pre>

      <WrapperDialog
        getNewUser={getNewUser}
        open={stateModalWindow}
        setClose={closeModalWindowHandler}
      />
      {/* <WrapperChange
        getNewUser={getNewUser}
        open={stateModalWindow}
        setClose={closeModalWindowHandler}
      /> */}
    </>
  );
};
export default UsersComponent;
