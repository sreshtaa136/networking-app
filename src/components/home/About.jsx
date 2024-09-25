import { Box, Typography, Stack, Divider } from "@mui/material";
import UserType from "./UserType";

const About = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "transparent",
        width: "100%",
        // DO NOT ALTER
        px: {
          lg: 13,
          md: 8,
          sm: 6,
          xs: 3,
        },
      }}
    >
      <Stack
        justifyContent="flex-start"
        gap={3}
        sx={{
          py: 10,
          px: {
            xs: 0.75,
            sm: 1,
            md: 1.25,
          },
        }}
      >
        <Box
          sx={{
            p: 0,
          }}
        >
          <Typography variant="overline" mb={1} color="white">
            Who we serve
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "24px",
                sm: "28px",
                md: "30px",
              },
              lineHeight: {
                xs: "28px",
                sm: "36px",
                md: "42px",
              },
            }}
            color="white"
            width="85%"
          >
            Interested in the benefits of hosting or sponsoring your own events
            on Pizza? Let&apos;s chat!
            {/* changed Let's to Lets */}
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "white", opacity: 0.3 }} />
        <UserType
          type="Hosts"
          desc="Take advantage of your powerful network by becoming a Pizza-Approved host.Expand your reach, clout, & profitability via our growing community."
          path="/host"
          btnText="Learn more"
        />
        <UserType
          type="Sponsors"
          desc="Email is dead. Executives value human relationships, & our community of thoughtful & fun networking opportunites is the perfect way to meet your target audience."
          path="/sponsor"
          btnText="Learn more"
        />
        <UserType
          type="VIPs"
          desc="Pizza is a collection of high end & fun events being hosted by local Executives, Thought Leaders, & Technologies. Expand your network, learn, & have fun while doing it!"
          isLast={true}
          path="/find-events"
          btnText="Find events"
        />
      </Stack>
    </Box>
  );
};

export default About;
