import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import PastJobs from "./components/PastJobs";
import AboutMe from "./components/AboutMe";
import ApplicableJobs from "./components/ApplicableJobs";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Paper elevation={3} style={{ flexGrow: 1 }}>
              <AboutMe />
            </Paper>
          </Grid>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Paper
              elevation={3}
              style={{ flexGrow: 1, backgroundColor: "transparent", boxShadow: 'none' }}
            >
              <ApplicableJobs />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ padding: "20px" }}>
              <PastJobs />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
