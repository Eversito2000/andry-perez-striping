import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

export default function AboutMe() {
  const description = `As a striping painter, I thrive on precision and detail, meticulously crafting straight, crisp lines that define and organize spaces. My tools are extensions of my finesse, allowing me to create perfectly measured and spaced markings on various surfaces. Whether it's a road, parking lot, or sports field, I take pride in my ability to bring order and clarity to these areas.But it's not just about functionality; I inject creativity into my work, suggesting designs and color combinations that enhance the visual appeal of the space. Ultimately, my goal is to leave behind not just lines but a testament to professionalism and expertise in every project I undertake.`;

  return (
    <Box sx={{ fontFamily: "Helvetica", m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ mb: 2, textAlign: "left", fontSize: "2em" }}
          >
            About me
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.3em",
              lineHeight: "1.5",
              color: "#333",
              fontWeight: "500",
              fontFamily: '"Antonio", Sans-serif',
              textAlign: "left",
            }}
          >
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Avatar
            alt="Profile Picture"
            src="/static/images/avatar/1.jpg"
            sx={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
