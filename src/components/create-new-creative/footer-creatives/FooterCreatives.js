import * as React from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
  Container,
  IconButton,
} from "@mui/material";

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
};

const FooterCreatives = () => {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        color: "#fff",
        py: 4,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="#fff" gutterBottom>
              ❤ MPHelper
            </Typography>
            {/* Add your logo component or image here */}
          </Grid>

          <Grid item xs={6} sm={3} md={2}></Grid>
        </Grid>
        <Typography variant="body2" color="#fff" align="center" sx={{ pt: 6 }}>
          © 2024 MPHelper, Blinova Aleksandra. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterCreatives;
