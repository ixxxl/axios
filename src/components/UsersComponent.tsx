<<<<<<< HEAD
import { Box, Button, IconButton, Snackbar, Stack } from "@mui/material";
import { padding } from "@mui/system";
import { useEffect, useState } from "react";
=======
import { Button, IconButton, Snackbar, Stack } from "@mui/material";
import { Box, padding } from "@mui/system";
import { Suspense, useEffect, useState } from "react";
>>>>>>> HookForm
import { IUsers } from "../models/userModels";
import { useAxiosGet } from "../services/axiosGET";
import { WrapperDialog } from "./WrapperDialog";
import CloseIcon from "@mui/icons-material/Close";
import { WrapperChange } from "./WrapperChange";
import OneUserComponent from "./OneUserComponent";

const UsersComponent = () => {
  const [open, setOpen] = useState(false);

  const [users, setUsers] = useState<IUsers[]>([]);
  const [stateModalWindow, setStateModalWindow] = useState<boolean>(false);
  const [stateChangeWindows, setStateChangeWindow] = useState<boolean>(false);
  const [changedUser, setChangedUser] = useState<IUsers | null>(null);
  const [deleteUser, setDeletedUSer] = useState<IUsers | null>(null);

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

  const changeUserEvent = () => {
    setStateChangeWindow(true);
  };

  const closenWrapperChange = () => {
    setStateChangeWindow(false);
  };

  const closeModalWindowHandler: any = () => {
    setStateModalWindow(false);
  };

  const getNewUser = (user: IUsers) => {
    setUsers((state) => [...state, user]);
    setOpen(true);
  };

  const getDeletedUser = (user: any) => {
    setUsers((state) => [...state, user]);
  };
  const getModifiedUser = (user: IUsers) => {
    setUsers((users) => [...users.filter((u) => u.id !== user.id), user]);
  };

  const getChangedUser = (user: IUsers) => {
    setChangedUser(user);
    setStateChangeWindow(true);
  };

  const { data, error, loaded } = useAxiosGet(`http://localhost:3020/users`);
  useEffect(() => {
    setUsers(data);
  }, [data]);

  useEffect(() => {
    setUsers(data);
  }, [deleteUser]);

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
<<<<<<< HEAD
      <div>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {users &&
            users.map((user) => (
              <OneUserComponent getChangedUser={getChangedUser} user={user} />
            ))}
        </Box>
      </div>
      {/* <pre> {JSON.stringify(users, null, 2)}</pre> */}

      <WrapperDialog
        getNewUser={getNewUser}
        open={stateModalWindow}
        setClose={closeModalWindowHandler}
      />
=======

      <pre> {JSON.stringify(users, null, 2)}</pre>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <ErrorBoundary fallback={ErrorScreen}> </ErrorBoundary> */}
        <WrapperDialog
          getNewUser={getNewUser}
          open={stateModalWindow}
          setClose={closeModalWindowHandler}
        />
      </Suspense>
>>>>>>> HookForm

      <WrapperChange
        getDeletedUser={getDeletedUser}
        getModifiedUser={getModifiedUser}
        user={changedUser}
        open={stateChangeWindows}
        setClose={closenWrapperChange}
      />
    </>
  );
};
export default UsersComponent;
