import "./App.css";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div>Left</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>Right</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;