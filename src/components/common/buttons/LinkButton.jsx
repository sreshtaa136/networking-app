import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
// 65ffb5
const LinkButton = ({ path, buttonText, bgClr, outlineClr }) => {
  return (
    <Link href={path}>
      <Button
        variant="outlined"
        sx={{
          color: outlineClr ? outlineClr : "#65ffb5",
          borderColor: outlineClr ? outlineClr : "#65ffb5",
          bgcolor: bgClr ? bgClr : "#171638",
          borderRadius: 0,
          py: 1,
          width: "fit-content",
          fontSize: {
            md: "15px",
          },
          ":hover": {
            bgcolor: outlineClr ? outlineClr : "#65ffb5",
            borderColor: outlineClr ? outlineClr : "#65ffb5",
            color: bgClr ? bgClr : "#171638",
          },
        }}
      >
        {buttonText}
      </Button>
    </Link>
  );
};

export default LinkButton;
