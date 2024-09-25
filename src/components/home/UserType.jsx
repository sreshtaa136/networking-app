import { Box, Typography, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkButton from "../common/buttons/LinkButton";

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
          <LinkButton
            path={path}
            buttonText={btnText}
            outlined
            py={1}
            endIcon={<ArrowForwardIcon />}
          />
        </Box>
      </Box>
      {!isLast && <Divider sx={{ borderColor: "white", opacity: 0.3 }} />}
    </>
  );
};

export default UserType;
