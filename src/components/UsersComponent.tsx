import { Button, IconButton, Snackbar, Stack } from "@mui/material";
import { padding } from "@mui/system";
import { useEffect, useState } from "react";
import { IUsers } from "../models/userModels";
import { useAxiosGet } from "../services/axiosGET";
import { WrapperDialog } from "./WrapperDialog";
import CloseIcon from "@mui/icons-material/Close";

const UsersComponent = () => {
  const [open, setOpen] = useState(false);

  const [users, setUsers] = useState<IUsers[]>([]);
  const [stateModalWindow, setStateModalWindow] = useState<boolean>(false);

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

  const closeModalWindowHandler = () => {
    setStateModalWindow(false);
  };

  const getNewUser = (u: IUsers) => {
    setUsers((state) => [...state, u]);
    setOpen(true)
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
          Add
        </Button>
        <div>
          <Button onClick={handleClick}>Open simple snackbar</Button>
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
      {/* {users && users.map((user) => <p key={user.name}>{user.name}</p>)} */}
      <WrapperDialog
        getNewUser={getNewUser}
        open={stateModalWindow}
        setClose={closeModalWindowHandler}
      />
    </>
  );
};
export default UsersComponent;
