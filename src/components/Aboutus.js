import React from 'react';
import { Box, Grid, Typography, Chip, Stack, Card, CardContent, Avatar } from '@mui/material';

export default function Aboutus() {
  return (
    <Box sx={{
      maxWidth: 1100,
      mx: 'auto',
      p: { xs: 2, md: 3 },
      borderRadius: 2,
      backgroundImage: 'linear-gradient(rgba(11,18,32,0.55), rgba(11,18,32,0.8)), url(/about-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <Typography variant="h4" sx={{ fontWeight: 800, color: '#e6f0ff', mb: 3 }}>
        About
      </Typography>

      <Typography sx={{ color: '#b8c7d9', lineHeight: 1.8, mb: 5 }}>
        As a creative and quick-thinking individual with a penchant for online communication and
        relationship-building, I possess the ability to apply modern paradigms to construct highly
        scalable and performant systems. With years of experience designing and developing web
        applications, I bring a comprehensive skill set to the table. Armed with a Bachelor's degree in
        computer science, my passion for web development and digital marketing runs deep. I pride
        myself on being highly adaptable and agile, ready to tackle any challenge that comes my way.
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: '#0b1220', border: '1px solid rgba(255,255,255,0.06)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#e6f0ff', fontWeight: 700, mb: 2 }}>
                Web Developer & Mobile Developer
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <InfoRow label="Birthday" value="28 NOV 2004" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InfoRow label="Age" value="21" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InfoRow label="Phone" value="+91 8050025732" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InfoRow label="Degree" value="  DIPLOMA IN CSE" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InfoRow label="City" value="Dakshina Kannada, Karnataka , India" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InfoRow label="Freelance" value="Available" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar src="/logo512.png" alt="About Illustration" sx={{ width: 260, height: 260 }} />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, color: '#e6f0ff', mb: 2 }}>
          Freelance Career
        </Typography>
        <Typography sx={{ color: '#b8c7d9', lineHeight: 1.8 }}>
          Starting my freelancing journey during my Diploma days out of sheer passion, I've remained
          dedicated to creating web applications, mobile applications, marketing materials, and design
          projects. Over the years, I've found success in consistently delivering what my clients demand,
          honing my skills and expertise along the way. My commitment to excellence and my genuine love
          for what I do drive me to exceed expectations with each project I undertake.
        </Typography>
      </Box>

      <Stack direction="row" spacing={1} sx={{ mt: 4, flexWrap: 'wrap' }}>
        {["React", "Node.js", "Express", "MongoDB", "TypeScript", "Next.js", "Flutter"].map((t) => (
          <Chip key={t} label={t} sx={{ bgcolor: 'rgba(176,196,212,0.08)', color: '#c9d7e1', border: '1px solid rgba(255,255,255,0.08)' }} />
        ))}
      </Stack>
    </Box>
  );
}

function InfoRow({ label, value }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Typography component="span" aria-hidden sx={{ color: '#7fb1ff' }}>
        ▸
      </Typography>
      <Typography component="span" sx={{ color: '#9fb1c1', minWidth: 90, fontWeight: 600 }}>
        {label}:
      </Typography>
      <Typography component="span" sx={{ color: '#e6f0ff' }}>
        {value}
      </Typography>
    </Stack>
  );
}


