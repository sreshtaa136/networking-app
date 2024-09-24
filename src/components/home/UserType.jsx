import { Box, Typography, Button, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const UserType = ({ type, desc, path, btnText, isLast }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          py: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "26px",
              sm: "32px",
              md: "42px",
            },
            mb: {
              xs: 0.5,
            },
          }}
          color="#65ffb5"
          width="50%"
        >
          {type}
        </Typography>
        <Box
          sx={{
            pl: {
              sm: 0,
              md: 5,
            },
            pr: 3,
            width: {
              sm: "100%",
              md: "50%",
            },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                sm: "19px",
                md: "22px",
              },
            }}
            color="white"
          >
            {desc}
          </Typography>
          <Link href={path}>
            <Button
              variant="outlined"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "#65ffb5",
                borderColor: "#65ffb5",
                borderRadius: 0,
                py: 1.3,
                // width: "30%",
                width: "fit-content",
                ":hover": {
                  bgcolor: "#65ffb5",
                  borderColor: "#65ffb5",
                  color: "#171638",
                },
              }}
            >
              {btnText}
            </Button>
          </Link>
        </Box>
      </Box>
      {!isLast && <Divider sx={{ borderColor: "white", opacity: 0.3 }} />}
    </>
  );
};

export default UserType;
