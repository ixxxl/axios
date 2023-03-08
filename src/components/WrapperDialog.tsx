import { Save } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { geDataBirthDay, getFakePhoto } from "../helpers/ComonFunction";
import { IUsers } from "../models/userModels";
import { useAxiosPut } from "../services/axiosGET";
import { useAxiosPost } from "../services/axiosPOST";

interface IProps {
  open: boolean;
  setClose: () => void;
}

export const WrapperDialog = (props: IProps) => {
  const { open, setClose } = props;
  const [newUserState, setNewUserState] = useState<IUsers | null>(null);
  const [fieldTextState, setFieldTextState] = useState<any>({
    name: "",
    surname: "",
  });

  const nameChangeHandler = (e: any) => {
    console.log(e.target.value);
    setFieldTextState({ name: e.target.value });
  };

  const surNameChangeHandler = (e: any) => {
    console.log(e.target.value);
    setFieldTextState({ surname: e.target.value });
  };

  const { data, error } = useAxiosPost(
    "http://localhost:3020/users",
    fieldTextState
  );

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

  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle></DialogTitle>
        {newUserState && (
          <DialogContent>
            <img src={newUserState.photo} width={"50px"} height={"50px"} />
            <p>{newUserState.birhday}</p>
            <TextField
              onChange={nameChangeHandler}
              value={fieldTextState.name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              onChange={surNameChangeHandler}
              value={fieldTextState.surname}
              id="outlined-basic"
              label="Surname"
              variant="outlined"
            />
          </DialogContent>
        )}
        <DialogActions>
          <Button
            type="submit"
            onSubmit={() => {
              data;
            }}
          >
            Submit
          </Button>
          <Button onClick={setClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
