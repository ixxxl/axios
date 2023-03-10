import { Button, Paper, Typography } from "@mui/material";
import { IUsers } from "../models/userModels";
import { useState, useEffect } from "react";
import { WrapperDialog } from "./WrapperDialog";
import { WrapperChange } from "./WrapperChange";

interface IProps {
  user: IUsers;
  getChangedUser: (user: IUsers) => void;
}

const OneUserComponent = (props: IProps) => {
  const { user, getChangedUser } = props;

  const changeEvent = () => {
    getChangedUser(user);
  };

  return (
    <>
      <Paper sx={{ width: "100px", height: "50px" }}>
        <Typography>{user.birhday}</Typography>
        <Button onClick={changeEvent}>Change</Button>
      </Paper>
    </>
  );
};

export default OneUserComponent;
