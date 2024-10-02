"use client";
import { Box, Typography, Button, TextField, Stack } from "@mui/material";
import { useState } from "react";
import LinkButton from "../common/buttons/LinkButton";

const ContactUs = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setsubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prevState) => ({
      ...prevState,
      [name]: value,
    })); // updates each input element in the form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      contactForm.name.length > 0 &&
      contactForm.email.length > 0 &&
      contactForm.company.length > 0 &&
      contactForm.message.length > 0
    ) {
      setsubmitted(true);
      try {
        const sendEmailRes = {
          email: "pizzashop@gmail.com",
          name: contactForm.name,
          Uemail: contactForm.email,
          company: contactForm.company,
          message: contactForm.message,
          category: "contact-us",
        };
        console.log("Email sent successfully:", sendEmailRes);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: {
          xs: 5,
          md: 10,
        },
      }}
    >
      {!submitted ? (
        <Box
          component="section"
          sx={{
            width: {
              xs: "90%",
              md: "85%",
              lg: "70%",
            },
            display: "flex",
            justifyContent: "space-between",
            gap: "25px",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "start",
              md: "start",
            },
            px: {
              xs: 3,
              sm: 5,
              md: 6,
            },
            py: 5,
            bgcolor: "white",
            border: {
              xs: "none",
              md: "1px solid #c4c4c4",
              // md: "1px solid #4542B9",
            },
            borderRadius: 2,
            // filter: "drop-shadow(0 0 0.75rem #c5c5c5)",
          }}
        >
          <Typography
            // color="#151d23"
            color= "#171638"
            sx={{
              textAlign: !submitted && "center",
              fontSize: {
                xs: "34px",
                sm: "40px",
                md: "44px",
                lg: "50px",
              },
            }}
          >
            Contact Us
          </Typography>
          <Box
            component="form"
            sx={{
              width: {
                xs: "100%",
                md: "45%",
              },
            }}
          >
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              value={contactForm.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              type="email"
              name="email"
              value={contactForm.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Company"
              margin="normal"
              name="company"
              value={contactForm.company}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              multiline
              rows={4}
              name="message"
              value={contactForm.message}
              onChange={handleChange}
            />
            <LinkButton
              buttonText={"send"}
              outlined
              dark
              handleButtonClick={handleSubmit}
              py={0.5}
              my={2.5}
            />
          </Box>
        </Box>
      ) : (
        <Box
          component="section"
          sx={{
            width: "90%",
            py: {
              xs: 5,
              md: 0,
            },
          }}
        >
          <Stack textAlign={"center"} alignContent={"center"} gap={3}>
            <Typography
              sx={{
                fontSize: {
                  xs: "32px",
                  sm: "36px",
                  md: "48px",
                },
              }}
            >
              We&apos;ll be in touch soon.
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "18px",
                    lg: "20px",
                  },
                }}
              >
                You&apos;ll get an email confirmation for your call.
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "18px",
                  },
                }}
              >
                If you need more assistance, contact support@pizza.com.
              </Typography>
            </Box>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default ContactUs;
