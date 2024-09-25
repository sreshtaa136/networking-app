import Link from "next/link";
import { Button, Stack } from "@mui/material";
import LinkButton from "../common/buttons/LinkButton";

const NavRight = () => {
  return (
    <>
      <Stack direction={"row"} gap={2}>
        <LinkButton path={"/login"} buttonText={"login"} outlined />
        <LinkButton path={"/signup"} buttonText={"signup"} />
      </Stack>
    </>
  );
};

export default NavRight;
