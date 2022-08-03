import React from "react";

import { Stack } from "@mui/material";
// import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <h1>Loading...</h1>
    </Stack>
  );
};

export default Loader;
