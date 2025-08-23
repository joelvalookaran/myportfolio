import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Web Application',
      description: 'Modern web application built with React and Material-UI',
      image: 'https://via.placeholder.com/300x200/1976d2/ffffff?text=Project+1',
      tech: ['React', 'Material-UI', 'JavaScript']
    },
    {
      id: 2,
      title: 'Mobile App',
      description: 'Cross-platform mobile application using Flutter',
      image: 'https://via.placeholder.com/300x200/388e3c/ffffff?text=Project+2',
      tech: ['Flutter', 'Dart', 'Firebase']
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI/UX',
      image: 'https://via.placeholder.com/300x200/ff9800/ffffff?text=Project+3',
      tech: ['React', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary" fontWeight="bold">
          Portfolio
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Showcasing my latest projects and creative work in web development, mobile apps, and design
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.tech.map((tech) => (
                    <Typography
                      key={tech}
                      variant="caption"
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: 1,
                        fontSize: '0.75rem'
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
