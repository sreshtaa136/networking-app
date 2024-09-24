import { Container, Stack } from "@mui/material";
import Intro from "@/components/home/Intro";
import About from "@/components/home/About";
import HomeFindEvents from "@/components/home/FindEvents";

export default function Home() {
  return (
    <>
      {/* overall container for the page */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          bgcolor: "#171638",
          pt: {
            md: 5,
            xs: 0,
          },
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
          <HomeFindEvents />
          <About />
        </Stack>
      </Container>
    </>
  );
}
