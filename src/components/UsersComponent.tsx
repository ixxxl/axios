import { Button, Stack } from "@mui/material";

const UsersComponent = () => {
  
return (
    <>
    <hr/>
    <Stack spacing={4} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </Stack><hr/>
  </>
)
};
export default UsersComponent;
