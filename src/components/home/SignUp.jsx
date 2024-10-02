import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import LinkButton from "../common/buttons/LinkButton";

const SignUp = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "transparent",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
        py: 14,
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "32px",
            sm: "44px",
            md: "58px",
            lg: "60px",
          },
        }}
        color="white"
      >
        Ready to get started?
      </Typography>
      <LinkButton path={"/signup"} buttonText={"Signup"} outlined py={1} />
    </Box>
  );
};

export default SignUp;
