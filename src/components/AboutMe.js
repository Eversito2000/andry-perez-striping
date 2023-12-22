import { Box, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Rubik',
  }
});

export default function AboutMe() {
  const description = `As a striping painter, I thrive on precision and detail, meticulously crafting straight, crisp lines that define and organize spaces. My tools are extensions of my finesse, allowing me to create perfectly measured and spaced markings on various surfaces. Whether it's a road, parking lot, or sports field, I take pride in my ability to bring order and clarity to these areas.But it's not just about functionality; I inject creativity into my work, suggesting designs and color combinations that enhance the visual appeal of the space. Ultimately, my goal is to leave behind not just lines but a testament to professionalism and expertise in every project I undertake.`;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mx: 2, backgroundColor: '#white' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} >
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              sx={{ mb: 2, textAlign: "left" }}
            >
              About me
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.7em",
                lineHeight: "1.5",
                color: "#4A4A4A",
                fontWeight: "500",
                textAlign: "left",
              }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              alt="Profile Picture"
              src={require("../img/construction-worker.webp")}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}