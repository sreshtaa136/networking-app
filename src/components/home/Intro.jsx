import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import LinkButton from "../common/buttons/LinkButton";

const Intro = () => {
  return (
    <Box
      sx={{
        display: { md: "flex", xs: "inline" },
        position: "relative",
        alignItems: "center",
        justifyContent: { md: "space-between" },
      }}
      width={"100%"}
      height={400}
    >
      {/* Hero Section Content */}
      <Stack
        // spacing={8}
        alignItems={"center"}
        justifyContent={"center"}
        // height={"100%"}
        zIndex={1000}
        sx={{
          height: { md: "100%", xs: "80%" },
          textAlign: { md: "left", xs: "center" },
          width: {
            lg: "50%",
            md: "46%",
            sm: "80%",
            xs: "90%",
          },
          position: {
            md: "static",
            xs: "absolute",
          },
          top: {
            md: 0,
            xs: "50%",
          },
          left: {
            md: 0,
            xs: "50%",
          },
          transform: {
            md: "none",
            xs: "translate(-50%, -50%)",
          },
          p: {
            md: 0,
            sm: 1,
            xs: 1,
          },
        }}
      >
        <Typography
          variant="subtitle"
          color="white"
          sx={{
            fontSize: {
              lg: 40,
              md: 30,
              sm: 20,
              xs: 18,
            },
            fontWeight: 250,
            lineHeight: 1.2,
            mb: { md: 8, xs: 4 },
          }}
        >
          Where connections <span style={{ color: "#65ffb5" }}>spark</span> and
          opportunities <span style={{ color: "#65ffb5" }}>meet</span> – host,
          sponsor, and discover networking events{" "}
          <span style={{ color: "#65ffb5" }}>effortlessly</span>.
        </Typography>
        <Stack
          direction="row"
          spacing={2.5}
          sx={{
            width: "100%",
            justifyContent: { md: "flex-start", xs: "center" },
          }}
        >
          <LinkButton path={"/host"} buttonText={"host"} />
          <LinkButton path={"/sponsor"} buttonText={"sponsor"} />
        </Stack>
      </Stack>
      {/* Hero Section Image */}
      <Box
        sx={{
          width: {
            lg: "39%",
            md: "44%",
            xs: "100%",
          },
          height: {
            lg: "100%",
            md: "90%",
            xs: "100%",
          },
          // position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            opacity: {
              md: "100%",
              xs: "25%",
            },
          }}
        >
          <Image
            className="intro-img"
            src="https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // height={450}
            alt="people-in-formal-attire-discussing"
            priority={true}
            fill={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
