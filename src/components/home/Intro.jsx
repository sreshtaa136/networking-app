import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import LinkButton from "../common/buttons/LinkButton";
import { TEXT_GRADIENT_STYLING } from "@/utils/constants";

const Intro = () => {
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        display: { md: "flex", xs: "inline" },
        position: "relative",
        alignItems: "center",
        justifyContent: { md: "space-between" },
        // DO NOT ALTER
        px: {
          lg: 13,
          md: 8,
          sm: 0,
          xs: 0,
        },
      }}
      width={"100%"}
      height={550}
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
          // color="white"
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
            ...TEXT_GRADIENT_STYLING,
            color: { md: "transparent", xs: "white" },
            WebkitTextFillColor: { md: "transparent" },
          }}
        >
          Where connections <span style={{ color: "white" }}>spark</span> and
          opportunities <span style={{ color: "white" }}>meet</span> – host,
          sponsor, and discover networking events{" "}
          <span style={{ color: "white" }}>effortlessly</span>.
        </Typography>
        <Stack
          direction="row"
          spacing={2.5}
          sx={{
            width: "100%",
            justifyContent: { md: "flex-start", xs: "center" },
          }}
        >
          <LinkButton path={"/host"} buttonText={"host"} outlined py={1} />
          <LinkButton
            path={"/sponsor"}
            buttonText={"sponsor"}
            outlined
            py={1}
          />
        </Stack>
      </Stack>
      {/* Hero Section Image */}
      <Box
        sx={{
          // mb: 5,
          width: {
            lg: "43%",
            md: "50%",
            xs: "100%",
          },
          height: {
            lg: 450,
            md: "80%",
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
              xs: "20%",
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
