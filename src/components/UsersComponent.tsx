import { Button, Stack } from "@mui/material";
import { padding } from "@mui/system";
import { useEffect, useState } from "react";
import { IUsers } from "../models/userModels";
import { useAxiosGet } from "../services/axios";
import { WrapperDialog } from "./WrapperDialog";

const UsersComponent = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [stateModalWindow, setStateModalWindow] = useState<boolean>(false);

  const openModalWindowHandler = () => {
    setStateModalWindow(true);
  };

  const closeModalWindowHandler = () => {
    setStateModalWindow(false);
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
      </Stack>
      <hr />
      {users && users.map((user) => <p key={user.name}>{user.name}</p>)}
      <WrapperDialog
        open={stateModalWindow}
        setClose={closeModalWindowHandler}
      />
    </>
  );
};
export default UsersComponent;
