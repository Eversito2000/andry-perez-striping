import "./App.css";
import Navbar from "./components/Navbar";
import PastJobs from "./components/PastJobs";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ApplicableJobs from "./components/ApplicableJobs";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Element } from 'react-scroll'
import LandingHeader from "./components/LandingHeader";
import { Typography } from "@mui/material";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    if (window !== window.top) {
      window.top.location.href = window.location.href;
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="false" style={{ marginTop: "10px" }}>
        <Grid container >
          <Grid item xs={12} style={{ justifyContent: "center", alignItems: "center", backgroundColor: 'transparent' }}>
            <Paper sx={{ flexGrow: 1, backgroundColor: 'transparent', boxShadow: 'none' }}>
              <Element name="landing-header" id="contact-info">
                <LandingHeader />
              </Element>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
          <Element name="applicable-jobs" id="applicable-jobs">
            <Paper
              elevation={3}
              style={{ flexGrow: 1, boxShadow: 'none', margin: 'auto' }}
            >
              <Typography variant="h3" component="div" sx={{ marginRight: 4, marginBottom: '20px', fontFamily: 'Rubik' }}>
                My Services
              </Typography>
              <ApplicableJobs />
            </Paper>
          </Element>
        </Grid>
        <Grid item xs={12} style={{  justifyContent: "center", alignItems: "center", backgroundColor: '#F5F5F5' }}>
          <Element name="past-jobs" id="past-jobs">
            <Paper style={{ padding: "20px", margin: 'auto', maxWidth: '75%', backgroundColor: '#F5F5F5', boxShadow: 'none' }}>
              <PastJobs />
            </Paper>
          </Element>
        </Grid>
        <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center",  backgroundColor: 'white' }}>
          <Element name="about-me" id="about-me">
            <Paper style={{ padding: "20px", margin: 'auto', maxWidth: '75%', backgroundColor: 'white', boxShadow: 'none' }}>
              <AboutMe />
            </Paper>
          </Element>
        </Grid>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
