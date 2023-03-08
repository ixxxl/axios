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

interface IProps {
  open: boolean;
  setClose: () => void;
}

export const WrapperDialog = (props: IProps) => {
  const { open, setClose } = props;
  const [newUserState, setNewUserState] = useState<IUsers | null>(null);
  const [fieldTextState, setFieldTextState] = useState<any>();

  const nameChangeHandler = (e: any) => {
    console.log(e.target.value);
    setFieldTextState(e.target.value);
  };

  useEffect(() => {
    if (open) {
      let u: IUsers = {
        photo: getFakePhoto(),
        birhday: geDataBirthDay(),
        name: "Igor",
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
              value={fieldTextState}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </DialogContent>
        )}
        <DialogActions>
          <Button type="submit" onSubmit={() => {}}>
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
