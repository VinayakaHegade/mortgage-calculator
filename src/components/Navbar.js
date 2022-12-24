import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="xl">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bank of React
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
