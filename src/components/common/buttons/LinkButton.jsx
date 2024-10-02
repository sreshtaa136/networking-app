import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const LinkButton = ({
  path,
  buttonText,
  outlined,
  dark,
  py,
  my,
  endIcon,
  handleButtonClick,
}) => {
  // pov: outlined styling
  const normal = dark
    ? { color: "#171638", borderColor: "#171638", bgcolor: "transparent" }
    : { color: "#FFFFFF", borderColor: "#FFFFFF", bgcolor: "transparent" };

  const hover = dark
    ? {
        color: "#FFFFFF",
        borderColor: "#171638",
        bgcolor: "#171638",
      }
    : { color: "#171638", borderColor: "#FFFFFF", bgcolor: "#FFFFFF" };

  const customStyling = {
    borderRadius: 0,
    width: "fit-content",
    fontSize: {
      md: "15px",
    },
    py: py,
    my: my,
  };

  return path ? (
    <Link href={path}>
      <Button
        variant="outlined"
        endIcon={endIcon}
        sx={
          outlined
            ? { ...normal, ":hover": hover, ...customStyling }
            : { ...hover, ":hover": normal, ...customStyling }
        }
      >
        {buttonText}
      </Button>
    </Link>
  ) : (
    <Button
      variant="outlined"
      type="submit"
      endIcon={endIcon}
      onClick={handleButtonClick}
      sx={
        outlined
          ? { ...normal, ":hover": hover, ...customStyling }
          : { ...hover, ":hover": normal, ...customStyling }
      }
    >
      {buttonText}
    </Button>
  );
};

export default LinkButton;
