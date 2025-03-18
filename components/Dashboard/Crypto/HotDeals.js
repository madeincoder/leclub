import React from "react";
import { Box, Card, Typography } from "@mui/material";

const HotDeals = () => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontSize: 20,
          fontWeight: 700,
          color: "#fff",
          textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
        }}
      >
        Hot Deals!
      </Typography>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          mb: "15px",
          mt: "15px",
          backgroundColor: "#ff5722",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {/* black friday image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Box>
            <img
              src="/images/black-friday.png"
              alt="User"
              width="100%"
              height="100%"
              style={{ borderRadius: "10px", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default HotDeals;
