import { Container, Stack } from "@mui/material";
import Intro from "@/components/home/Intro";

export default function Home() {
  return (
    <>
      {/* overall container for the page */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          bgcolor: "#151d23",
          px: 13,
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
        </Stack>
      </Container>
    </>
  );
}
