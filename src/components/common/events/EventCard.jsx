"use client";
import { Box, Typography, Stack, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Image from "next/image";
import EventPlaceholder from "@/assets/event-placeholder.png";
import RoomIcon from "@mui/icons-material/Room";

const EventCard = ({ event, isLast }) => {
  const {
    eventDate,
    eventTime,
    title,
    descriptionShort,
    city,
    state,
    hostCompany,
    hostCompanyAvatarUrl,
    vipCount,
    ticketsSold,
    ticketCapacity,
    coverImgUrl,
  } = event;
  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const newDate = new Date(eventDate);
  const day = newDate.getDate();
  const month = monthNames[newDate.getMonth()]; // Get month name
  const year = newDate.getFullYear();
  console.log("newDate", day, month, year);
  const ticketsLeft = ticketCapacity - ticketsSold;
  const titleLength = title.length;

  return (
    <>
      <Grid
        container
        bgcolor={"pink"}
        width={"100%"}
        sx={{
          // borderRadius: 1.5,
          height: {
            sm: titleLength > 50 ? 280 : 240,
            xs: titleLength > 20 ? 360 : 340,
          },
          background: "#ffffff",
          boxShadow: "6px 6px 5px #f0f0f0,-6px -6px 5px #fafafa",
          cursor: "pointer",
          justifyContent: {
            sm: "space-between",
            xs: "flex-start",
          },
          ":hover": {
            border: "1.5px solid",
            borderImage: "linear-gradient(70deg, #4542B9 45%, #8D8AFF) 1",
            // boxShadow: "none",
            // borderRadius: 1.5,
          },
        }}
        p={1}
      >
        {/* cover image */}
        <Grid
          size={{
            sm: 4,
            xs: 12,
          }}
          p={{
            sm: 2,
            xs: 1,
          }}
          // bgcolor={"pink"}
          sx={{
            height: {
              sm: "auto",
              xs: "53%",
            },
          }}
        >
          <Box
            height={"100%"}
            sx={{ position: "relative", borderRadius: 1.5, overflow: "clip" }}
          >
            <Image
              className="intro-img"
              src={coverImgUrl || EventPlaceholder}
              // src={EventPlaceholder}
              alt="people-in-formal-attire-discussing"
              priority={true}
              fill={true}
            />
          </Box>
        </Grid>
        {/* event details */}
        <Grid
          size={{
            sm: 8,
            xs: 12,
          }}
          py={1.5}
          px={2}
          sx={{
            height: {
              sm: "auto",
              xs: "47%",
            },
          }}
          // bgcolor={"pink"}
        >
          {/* date and time */}
          <Stack
            flexDirection="row"
            alignItems="center"
            gap={1}
            color="#1F1F1F"
          >
            <Typography fontSize="12px" fontWeight="bold">
              {day} {month} {year}
            </Typography>
            <Box
              sx={{
                bgcolor: "#1F1F1F",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              .
            </Box>
            <Typography sx={{ fontSize: "12px" }} fontWeight="bold">
              {eventTime}
            </Typography>
          </Stack>
          {/* title */}
          {/* MAX 85 CHARS */}
          <Typography
            sx={{
              fontSize: {
                xl: "22px",
                lg: "20px",
                md: "19px",
                sm: "18px",
              },
            }}
            width={"95%"}
            fontWeight={"medium"}
          >
            {titleLength > 85 ? `${title.slice(0, 85)}...` : title}
          </Typography>
          {/* location */}
          <Stack
            flexDirection="row"
            alignItems="center"
            gap={0.2}
            color="#343434"
            mt={0.4}
          >
            <RoomIcon fontSize="4px" />
            <Typography fontSize="12px" fontWeight="bold">
              {city}, {state}
            </Typography>
          </Stack>
          {/* description */}
          {/* MAX 140 CHARS */}
          <Typography
            width={"95%"}
            // bgcolor={"yellow"}
            height={{
              sm: "37%",
              xs: titleLength > 50 ? "30%" : "37%",
            }}
            mt={1.5}
            // mb={1}
            fontSize={"17px"}
            color={"#363636"}
            // bgcolor={"pink"}
            sx={{
              fontSize: {
                xl: "17px",
                lg: "16px",
                sm: "15px",
                xs: "14px",
              },
              lineHeight: {
                md: "24px",
                sm: "21px",
                xs: "18px",
              },
              display: {
                sm: "flex",
                xs: "none"
              }
            }}
          >
            {descriptionShort.length > 130
              ? `${descriptionShort.slice(0, 130)}...`
              : descriptionShort}
          </Typography>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems={"end"}
            // bgcolor={"pink"}
            mt={{
              sm: 0,
              xs: 2.5,
            }}
          >
            {/* host details */}
            <Stack
              flexDirection="row"
              gap={1}
              alignItems="center"
              // width={"50%"}
            >
              <Avatar
                src={hostCompanyAvatarUrl}
                sx={{
                  width: {
                    xl: 30,
                    lg: 28,
                    md: 26,
                    sm: 26,
                    xs: 23,
                  },
                  height: {
                    xl: 30,
                    lg: 28,
                    md: 26,
                    sm: 26,
                    xs: 23,
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: "11.5px",
                }}
                fontWeight="bold"
              >
                <span style={{ color: "#464646" }}>Hosted by</span>{" "}
                {hostCompany}
              </Typography>
            </Stack>
            {/* vips and seats */}
            <Stack
              flexDirection="row"
              gap={2}
              width="fit-content"
              // bgcolor={"blue"}
            >
              {/* vips */}
              <Stack
                flexDirection="row"
                alignItems="center"
                gap={0.5}
                color="black"
                p={0.6}
                borderRadius={1}
                sx={{
                  backgroundColor: "rgb(241, 243, 246)",
                  display: {
                    md: "flex",
                    xs: "none",
                  },
                }}
              >
                <PeopleAltIcon fontSize="5px" />
                <Typography sx={{ fontSize: "11.5px" }}>
                  {vipCount} {vipCount === 1 ? "VIP" : "VIPs"} attending
                </Typography>
              </Stack>
              {/* tickets left */}
              <Stack
                flexDirection="row"
                alignItems="center"
                gap={0.5}
                p={0.6}
                borderRadius={1}
                sx={{
                  backgroundColor:
                    ticketsLeft < 10
                      ? "rgb(250, 237, 237)"
                      : "rgb(241, 243, 246)",
                  display: {
                    sm: "flex",
                    xs: "none",
                  },
                }}
                color={ticketsLeft < 10 ? "#cd4949" : "black"}
              >
                <ConfirmationNumberIcon fontSize="5px" />
                <Typography sx={{ fontSize: "11.5px" }}>
                  {ticketsLeft} {ticketsLeft === 1 ? "ticket" : "tickets"} left
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default EventCard;
