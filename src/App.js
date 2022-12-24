import "./App.css";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import SliderSelect from "./components/SliderSelect";
import Tenure from "./components/Tenure";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SliderSelect/>
            <Tenure/>
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
