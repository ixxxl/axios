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
import { useForm } from "react-hook-form";
import { geDataBirthDay, getFakePhoto } from "../helpers/ComonFunction";
import { IUsers } from "../models/userModels";
import UsersComponent from "./UsersComponent";
import { ErrorMessage } from "@hookform/error-message";

interface IProps {
  open: boolean;
  setClose: () => void;
  getNewUser: (u: IUsers) => void;
}

export const WrapperDialog = (props: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });
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

  useEffect(() => {
    if (btnSubmit) {
      (async () => {
        try {
          console.log(newUserState);
          const response: any = await axios.post(
            "http://localhost:3020/users",
            newUserState
          );
          props.getNewUser(response.data);

          setClose();
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoaded(true);
        }
      })();
    }
  }, [btnSubmit]);

  const submitFormHandler = () => {
    console.log();
    setNewUserState(data);
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

  useEffect(() => {
    if (open) {
      let u: IUsers = {
        photo: getFakePhoto(),
        birhday: geDataBirthDay(),
        name: "",
        surname: "",
      };
      setNewUserState(u);
    }
  }, [open]);

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    setNewUserState(data);
    setBtnSubmit(true);
    reset();
  };

  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle></DialogTitle>
        {newUserState && (
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <img src={newUserState.photo} width={"50px"} height={"50px"} />
            <p>{newUserState.birhday}</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                First Name:
                <input
                  {...register("firstName", {
                    required: "Обязательно для заполнения",
                    minLength: { value: 3, message: "minimum length 3" },
                  })}
                />
              </label>
              <div>
                <ErrorMessage errors={errors} name="firstName" />
                {/* <ErrorMessage
                  errors={errors}
                  name="firstName"
                  render={({ message }) => <p>{message}</p>}
                /> */}
              </div>
              <label>
                Last Name:
                <input
                  {...register("lasttName", {
                    required: "Обязательно для заполнения",
                    minLength: { value: 3, message: "minimum length 3" },
                  })}
                />
                <div>
                  <ErrorMessage errors={errors} name="lasttName" />
                </div>
              </label>

              <input type="submit" disabled={!isValid} />
            </form>
            <TextField
              onChange={nameChangeHandler}
              value={newUserState.name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
              error={errorName}
              helperText={errorName ? "Incorrect entry." : ""}
            />
            <TextField
              onChange={surNameChangeHandler}
              value={newUserState.surname}
              id="outlined-basic"
              label="Surname"
              variant="outlined"
              error={errorSurname}
              helperText={errorSurname ? "Incorrect entry." : ""}
            />
            <pre> {JSON.stringify(newUserState, null, 2)}</pre>
          </DialogContent>
        )}
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
              <LinearProgress variant="buffer" />
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
