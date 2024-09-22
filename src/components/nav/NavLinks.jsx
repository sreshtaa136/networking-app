import Link from "next/link";
import { Typography } from "@mui/material";

const LandingPageLinks = () => {
  return (
    <>
      <Link
        href={"/host"}
        sx={{
          color: "white",
        }}
      >
        <Typography
          variant="body"
          component="div"
          sx={{
            fontWeight: {
              lg: 300,
              sm: 200,
            },
            fontSize: {
              lg: 16,
              md: 14,
              sm: 13,
            },
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          HOST
        </Typography>
      </Link>
      <Link href={"/sponsor"}>
        <Typography
          variant="body"
          component="div"
          sx={{
            fontWeight: {
              lg: 300,
              sm: 200,
            },
            fontSize: {
              lg: 16,
              md: 14,
              sm: 13,
            },
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          SPONSOR
        </Typography>
      </Link>
      <Link href={"/find-events"}>
        <Typography
          variant="body"
          noWrap
          component="div"
          sx={{
            fontWeight: {
              lg: 300,
              sm: 200,
            },
            fontSize: {
              lg: 16,
              md: 14,
              sm: 13,
            },
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          FIND EVENTS
        </Typography>
      </Link>
    </>
  );
};

export default LandingPageLinks;
