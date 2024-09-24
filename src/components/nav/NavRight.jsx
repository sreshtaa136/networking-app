import Link from "next/link";
import { Button } from "@mui/material";

const NavRight = () => {
  return (
    <>
      <Link href={"/login"}>
        <Button
          variant="outlined"
          sx={{
            fontSize: {
              md: 14,
              sm: 12,
            }, // rwd not working
            width: "max-content",
            borderRadius: 0,
            color: "#65ffb5",
            borderColor: "#65ffb5",
            ":hover": {
              bgcolor: "#65ffb5",
              borderColor: "#65ffb5",
              color: "#171638",
            },
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          LOG IN
        </Button>
      </Link>
      <Link href={"/signup"}>
        <Button
          variant="outlined"
          sx={{
            fontSize: {
              md: 14,
              sm: 12,
            }, // rwd not working
            width: "max-content",
            borderRadius: 0,
            bgcolor: "#65ffb5",
            borderColor: "#65ffb5",
            color: "#171638",
            ":hover": {
              color: "#65ffb5",
              borderColor: "#65ffb5",
              bgcolor: "#171638",
            },
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          SIGN UP
        </Button>
      </Link>
    </>
  );
};

export default NavRight;
