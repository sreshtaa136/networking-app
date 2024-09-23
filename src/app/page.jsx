import { Container, Stack } from "@mui/material";
import Intro from "@/components/home/Intro";
import About from "@/components/home/About";

export default function Home() {
  return (
    <>
      {/* overall container for the page */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          bgcolor: "#151d23",
          px: {
            lg: 15,
            md: 8,
            sm: 6,
            xs: 3,
          },
          py: 8,
        }}
      >
        {/* contains sections of the page */}
        <Stack
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Intro />
          <About />
        </Stack>
      </Container>
    </>
  );
}
