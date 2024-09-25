import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  InputBase,
  Skeleton,
} from "@mui/material";
import Link from "next/link";
import LinkButton from "../common/buttons/LinkButton";

const HomeFindEvents = () => {
  return (
    <Box
      component="section"
      sx={{
        color: "#171638",
        bgcolor: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        // DO NOT ALTER
        px: {
          lg: 13,
          md: 8,
          sm: 6,
          xs: 3,
        },
        py: 8,
      }}
    >
      <Box
        justifyContent="space-between"
        alignItems="flex-end"
        gap={1.5}
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <Typography variant="overline">Find events</Typography>
          <Typography
            variant="h4"
            mt={1}
            sx={{ fontSize: { lg: "35px", md: "30px", xs: "25px" } }}
          >
            Discover networking events that blend valuable insights, expert
            training, and thought leadership with unforgettable experiences.
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            width: { md: "45%", xs: "100%" },
            fontSize: { lg: "23px", md: "18px", xs: "15px" },
          }}
        >
          Our hosts, attendees, and sponsors are carefully selected
          professionals, all eager to build meaningful connections. Ready to
          make your next big connection? We can’t wait to see you!
        </Typography>
      </Box>

      {/* events */}
      {/* <Box sx={{ mx: 28 }}>
        {newEventData ? (
          newEventData
            ?.slice(0, 5)
            .map((event, index) => (
              <Event key={index} event={event} isLast={index === 4} />
            ))
        ) : (
          <Skeleton variant="rectangular" width={800} height={300} />
        )}
      </Box> */}
      <LinkButton
        path={"/find-events"}
        buttonText={"See all events"}
        outlined
        dark
        py={1}
      />
    </Box>
  );
};

export default HomeFindEvents;
