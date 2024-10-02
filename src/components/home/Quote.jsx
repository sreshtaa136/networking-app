import { Box, Typography, Stack } from "@mui/material";
import Link from "next/link";

const Quote = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: {
          xs: "450px",
          sm: "600px",
          md: "650px",
          lg: "800px",
        },
        textAlign: "center",
        // Photo by <a href="https://unsplash.com/@mikechv?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mike C. Valdivia</a> on <a href="https://unsplash.com/photos/buildings-near-body-of-water-landscape-photography-kZokA2VTKn4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        // background:
        //   "url('https://plus.unsplash.com/premium_photo-1681412504505-c3161f898893?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        background:
          "url('https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat fixed center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          height: "100%",
          opacity: "0.7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          gap: {
            xs: 2.5,
            lg: 8,
          },
          px: "15%",
        }}
      >
        <Typography
          color="#151d23"
          sx={{
            textAlign: "left",
            fontSize: {
              xs: "24px",
              sm: "32px",
              md: "40px",
              lg: "52px",
            },
            lineHeight: {
              xs: "28px",
              sm: "36px",
              md: "44px",
              lg: "62px",
            },
            fontWeight: {
              xs: "500",
            },
          }}
        >
          &quot;Everyday by 12pm I have 30+ unsolicited emails in my inbox. The
          only way I take meetings with new vendors is if they take the time to
          meet me face to face.&quot;
        </Typography>
        <Typography
          color="black"
          sx={{
            textAlign: "left",
            color: "#5b6067",
            fontSize: {
              xs: "16px",
              sm: "20px",
              md: "24px",
              lg: "32px",
            },
          }}
        >
          — RAYMOND THOL, CTO, FORTUNE 500 COMPANY
        </Typography>
        <Stack
          direction={"row"}
          gap={1}
          sx={{
            position: "absolute",
            right: 50,
            bottom: 10,
            opacity: 0.75,
          }}
          zIndex={1000}
        >
          <Typography
            color="black"
            fontSize={{
              sm: "11px",
              xs: "10px",
            }}
          >
            {"Photo by "}
            <Link
              href="https://unsplash.com/@mikechv?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: {
                  sm: "11.5px",
                  xs: "12.5px",
                },
              }}
              target="_blank"
            >
              Mike C. Valdivia
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Quote;
