import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const LinkButton = ({ path, buttonText }) => {
  return (
    <Link href={path}>
      <Button
        variant="outlined"
        sx={{
          color: "#65ffb5",
          borderColor: "#65ffb5",
          bgcolor: "#151d23",
          borderRadius: 0,
          py: 1,
          width: "fit-content",
          fontSize: {
            md: "15px",
          },
          ":hover": {
            bgcolor: "#65ffb5",
            borderColor: "#65ffb5",
            color: "#151d23",
          },
        }}
      >
        {buttonText}
      </Button>
    </Link>
  );
};

export default LinkButton;
