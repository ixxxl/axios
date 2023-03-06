import { Button, Stack } from "@mui/material";
import { padding } from "@mui/system";
import { useEffect, useState } from "react";

const UsersComponent = () => {
  const [users, setUsers] = useState<string>();

  return (
    <>
      <hr />
      <Stack spacing={4} sx={{ paddingLeft: "20px" }} direction="row">
        <Button variant="contained">Add</Button>
      </Stack>
      <hr />

      <pre id="regexString"></pre>
    </>
  );
};
export default UsersComponent;
