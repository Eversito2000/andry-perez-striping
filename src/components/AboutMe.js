import { Box, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'Rubik',
  }
});
theme = responsiveFontSizes(theme);

export default function AboutMe() {
  const description = `As a striping painter, I thrive on precision and detail, meticulously crafting straight, crisp lines that define and organize spaces. My tools are extensions of my finesse, allowing me to create perfectly measured and spaced markings on various surfaces. Whether it's a road, parking lot, or sports field, I take pride in my ability to bring order and clarity to these areas. But it's not just about functionality; I inject creativity into my work, suggesting designs and color combinations that enhance the visual appeal of the space. Ultimately, my goal is to leave behind not just lines but a testament to professionalism and expertise in every project I undertake.`;

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{ mb: 2, textAlign: "left" }}
          >
            About me
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.56em",
              lineHeight: "1.5",
              color: "#4A4A4A",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ maxWidth: '100%', height: 'auto' }}>
            <img
              alt=""
              src={require("../img/construction-worker.webp")}
              style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
