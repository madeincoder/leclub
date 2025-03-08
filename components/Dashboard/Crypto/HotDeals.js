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
          p: "25px",
          mb: "15px",
          mt: "15px",
          backgroundColor: "#ff5722",
          textAlign: "center",
          color: "#fff",
          backgroundImage: "url('/images/hot-deals.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "560px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: 32,
              fontWeight: 700,
              color: "#fff",
              textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
            }}
          >
            Hot Deals!
          </Typography>
          <Typography sx={{ fontSize: 18, marginTop: "10px", color: "#fff" }}>
            Grab the best discounts before they're gone!
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default HotDeals;
