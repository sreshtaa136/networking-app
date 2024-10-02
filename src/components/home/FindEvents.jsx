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
import EventCard from "../common/events/EventCard";

const HomeFindEvents = () => {
  const sampleEvents = [
    {
      eventDate: "2025-10-15T00:00:00Z",
      eventTime: "18:00",
      title: "Sydney Tech Innovators Meetup",
      descriptionShort:
        "Connect with the brightest minds in tech and startups, sharing insights, innovations, and new opportunities in Sydney.",
      city: "Sydney",
      state: "NSW",
      hostCompany: "Atlassian",
      hostCompanyAvatarUrl:
        "https://pbs.twimg.com/profile_images/1832182590721196032/MxXtWalG_400x400.png",
      vipCount: 15,
      ticketsSold: 120,
      ticketCapacity: 150,
      coverImgUrl:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      eventDate: "2025-11-05T00:00:00Z",
      eventTime: "09:00",
      title: "Melbourne AI & Data Science Summit",
      descriptionShort:
        "Discover AI advancements and data science breakthroughs with industry leaders and innovators in Melbourne's growing tech hub.",
      city: "Melbourne",
      state: "VIC",
      hostCompany: "Telstra",
      hostCompanyAvatarUrl:
        "https://www.edigitalagency.com.au/wp-content/uploads/telstra-logo-purple-background.png",
      vipCount: 13,
      ticketsSold: 180,
      ticketCapacity: 200,
      coverImgUrl:
        "https://plus.unsplash.com/premium_photo-1682124672287-522dc636dd83?q=80&w=3574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // "coverImgUrl": "https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      eventDate: "2024-09-28T00:00:00Z",
      eventTime: "14:00",
      title: "Brisbane FinTech Leaders Conference",
      descriptionShort:
        "Join top fintech innovators, industry leaders, and investors to explore the future of finance and blockchain technology in Brisbane.",
      city: "Brisbane",
      state: "QLD",
      hostCompany: "Commonwealth Bank",
      hostCompanyAvatarUrl:
        "https://logowik.com/content/uploads/images/commbank-new7899.jpg",
      vipCount: 19,
      ticketsSold: 75,
      ticketCapacity: 100,
      coverImgUrl:
        "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

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
        // gap: 8,
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
      <Stack
        mb={6}
        gap={3}
        mt={{
          sm: 8,
          xs: 4,
        }}
        sx={{
          width: {
            xl: "60%",
            lg: "75%",
            md: "85%",
            sm: "95%",
            xs: "80%",
          },
        }}
      >
        {sampleEvents?.slice(0, 2).map((event, index) => (
          <EventCard event={event} key={index} />
        ))}
      </Stack>
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
