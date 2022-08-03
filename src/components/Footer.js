import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" backgroundColor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Made By{" "}
        <a
          href="https://twitter.com/home"
          style={{
            color: "#FF2625",
            fontWeight: "bold",
            textDecoration: "none",
            target: "_blank",
          }}
        >
          Belal Bahaa
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
