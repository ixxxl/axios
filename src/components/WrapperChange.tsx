import { Save } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { geDataBirthDay, getFakePhoto } from "../helpers/ComonFunction";
import { IUsers } from "../models/userModels";

interface IPropsChange {
  open: boolean;
  setClose: () => void;
  users: any;
}

export const WrapperChange = (props: IPropsChange) => {
  const { open, setClose } = props;

  const [newUserState, setNewUserState] = useState<IUsers | null>(null);

  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorSurname, setErrorSurname] = useState<boolean>(false);
  const [formValidationState, setformValidationState] =
    useState<boolean>(false);

  const [btnSubmit, setBtnSubmit] = useState<boolean>(false);

  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const nameChangeHandler = (e: any) => {
    setNewUserState((st: any) => ({ ...st, name: e.target.value }));
  };

  const surNameChangeHandler = (e: any) => {
    setNewUserState((st: any) => ({ ...st, surname: e.target.value }));
  };

  // useEffect(() => {
  //   if (btnSubmit) {
  //     (async () => {
  //       try {
  //         const response: any = await axios.put(
  //           "http://localhost:3020/users",
  //           newUserState
  //         );
  //         props.getNewUser(response.data);
  //         setClose();
  //       } catch (error: any) {
  //         setError(error.message);
  //       } finally {
  //         setLoaded(true);
  //       }
  //     })();
  //   }
  // }, [btnSubmit]);

  const submitFormHandler = () => {
    console.log();
    setBtnSubmit(true);
  };

  // useEffect(() => {
  //   if (newUserState) {
  //     setErrorName(newUserState.name.length < 3);
  //     setErrorSurname(newUserState.surname.length < 3);
  //     setformValidationState(
  //       newUserState.name.length < 3 && newUserState.surname.length < 3
  //     );
  //     console.log(
  //       newUserState.name.length < 3 && newUserState.surname.length < 3
  //     );
  //   }
  // }, [newUserState]);

  // useEffect(() => {
  //   if (open) {
  //     let u: IUsers = {
  //       photo: getFakePhoto(),
  //       birhday: geDataBirthDay(),
  //       name: "",
  //       surname: "",
  //     };
  //     setNewUserState(u);
  //   }
  // }, [open]);

  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle></DialogTitle>
        <DialogContent></DialogContent>

        {/* {props.users.map((u:any) => (
          <div>{u.name}</div>
        ))} */}
        <DialogActions>
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
              <LinearProgress variant="determinate" />
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
