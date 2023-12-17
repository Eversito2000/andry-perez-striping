import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import PastJobs from "./components/PastJobs";
import AboutMe from "./components/AboutMe";
import ApplicableJobs from "./components/ApplicableJobs";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Element } from 'react-scroll'
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" style={{ marginTop: "60px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Element name="about-me" id="about-me">
              <Paper elevation={3} style={{ flexGrow: 1 }}>
                <AboutMe />
              </Paper>
            </Element>
          </Grid>
          <Grid item xs={12} style={{ display: "flex" }}>
            <Element name="applicable-jobs" id="applicable-jobs">
              <Paper
                elevation={3}
                style={{ flexGrow: 1, backgroundColor: "transparent", boxShadow: 'none' }}
              >
                <ApplicableJobs />
              </Paper>
            </Element>
          </Grid>
          <Grid item xs={12}>
            <Element name="past-jobs" id="past-jobs">
              <Paper style={{ padding: "20px" }}>
                <PastJobs />
              </Paper>
            </Element>
          </Grid>
          <Grid item xs={12}>
            <Element name="contact-info" id="contact-info">
              <Paper style={{ padding: "20px" }}>
                <ContactInfo />
              </Paper>
            </Element>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
