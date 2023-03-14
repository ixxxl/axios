import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { geDataBirthDay, getFakePhoto } from "../helpers/ComonFunction";
import { IUsers } from "../models/userModels";

interface IPropsChange {
  open: boolean;
  setClose: any;
  user: any;
  getModifiedUser: (changedData: any) => void;
}

export const WrapperChange = (props: IPropsChange) => {
  const { open, setClose, user } = props;
  const [deleteState, setDeleteState] = useState<boolean>(false);
  const [currentUserState, setCurrentUserState] = useState<IUsers | null>(null);

  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorSurname, setErrorSurname] = useState<boolean>(false);
  const [formValidationState, setformValidationState] =
    useState<boolean>(false);

  const [btnSubmit, setBtnSubmit] = useState<boolean>(false);

  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const nameChangeHandler = (e: any) => {
    setCurrentUserState((st: any) => ({ ...st, name: e.target.value }));
  };

  const surNameChangeHandler = (e: any) => {
    setCurrentUserState((st: any) => ({ ...st, surname: e.target.value }));
  };

  useEffect(() => {
    if (user) {
      setCurrentUserState(user);
    }
  }, [user]);
  //Put
  useEffect(() => {
    if (btnSubmit) {
      (async () => {
        try {
          const response: any = await axios.put(
            `http://localhost:3020/users/${user.id}`,
            currentUserState
          );

          props.getModifiedUser(response.data);

          // setClose();
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoaded(true);
        }
      })();
    }
  }, [btnSubmit]);

  //Delete
  useEffect(() => {
    if (deleteState) {
      (async () => {
        try {
          const response: any = await axios.delete(
            `http://localhost:3020/users/${user.id}`
          );

          //  props.getDeletedUser(response.status);
          console.log(response.status);

          setClose();
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoaded(true);
        }
      })();
    }
  }, [deleteState]);

  const deleteHandler: any = () => {
    // works only with any
    setDeleteState(true);
  };

  const submitFormHandler = () => {
    console.log();
    setBtnSubmit(true);
  };

  useEffect(() => {
    if (currentUserState) {
      setErrorName(currentUserState.name.length < 3);
      setErrorSurname(currentUserState.surname.length < 3);
      setformValidationState(
        currentUserState.name.length < 3 && currentUserState.surname.length < 3
      );
      console.log(
        currentUserState.name.length < 3 && currentUserState.surname.length < 3
      );
    }
  }, [currentUserState]);

  // useEffect(() => {
  //   if (open) {
  //     let u: IUsers = {
  //       photo: getFakePhoto(),
  //       birhday: geDataBirthDay(),
  //       name: "",
  //       surname: "",
  //     };
  //     //setNewUserState(u);
  //   }
  // }, [open]);

  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle></DialogTitle>
        {currentUserState && (
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <img src={user.photo} width={"50px"} height={"50px"} />
            <p>{user.birhday}</p>

            <TextField
              onChange={nameChangeHandler}
              value={currentUserState.name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
              error={errorName}
              helperText={errorName ? "Incorrect entry." : ""}
            />
            <TextField
              onChange={surNameChangeHandler}
              value={currentUserState.surname}
              id="outlined-basic"
              label="Surname"
              variant="outlined"
              error={errorSurname}
              helperText={errorSurname ? "Incorrect entry." : ""}
            />
            <pre> {JSON.stringify(props.user, null, 2)}</pre>
          </DialogContent>
        )}

        {/* {props.users.map((u:any) => (
          <div>{u.name}</div>
        ))} */}
        <DialogActions>
          <Button
            onClick={() => {
              if (window.confirm("Arre you sure you want to delete user?")) {
                deleteHandler();
              }
            }}
          >
            Delete
          </Button>
          {!btnSubmit ? (
            <Button
              onClick={submitFormHandler}
              disabled={formValidationState}
              variant="outlined"
            >
              Save
            </Button>
          ) : (
            <div style={{ width: "100px" }}>
              {/* <LinearProgress variant="determinate" /> */}
            </div>
          )}
          <Button onClick={setClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
