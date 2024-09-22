import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import LinkButton from "../common/buttons/LinkButton";

const Intro = () => {
  return (
    <Stack
      component="section"
      direction={"row"}
      alignItems={"center"}
      flexWrap={"wrap-reverse"}
      sx={{
        width: "100%",
      }}
    >
      {/* Hero Section Content */}
      <Stack
        spacing={4}
        alignItems={"center"}
        sx={{
          width: "40%",
        }}
      >
        <Typography
          variant="subtitle"
          color="white"
          sx={{
            fontSize: {
              lg: 40,
              md: 34,
              xs: 20,
            },
            fontWeight: 250,
            lineHeight: 1.2,
          }}
        >
          Where connections <span style={{ color: "#65ffb5" }}>spark</span> and
          opportunities <span style={{ color: "#65ffb5" }}>meet</span> – host,
          sponsor, and discover networking events{" "}
          <span style={{ color: "#65ffb5" }}>effortlessly</span>
        </Typography>
        <Stack direction="row" spacing={1.5} sx={{ width: "100%" }}>
          <LinkButton path={"/host"} buttonText={"host"} />
          <LinkButton path={"/sponsor"} buttonText={"sponsor"} />
        </Stack>
      </Stack>
      {/* Hero Section Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: {
            md: "60%",
            xs: "55%",
          },
          height: {
            lg: "auto",
            xs: "max-content",
          },
          // bgcolor:"pink"
          // overflow: "hidden",
        }}
      >
        <Image
          style={{ objectFit: "cover" }}
          className="intro-img"
          src="https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={700}
          height={450}
          alt="people-in-formal-attire-discussing"
          priority={true}
        />
      </Box>
    </Stack>
  );
};

export default Intro;
