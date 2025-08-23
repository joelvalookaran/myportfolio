import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid,
  Card,
  CardContent,
  CardActions,
  Button
} from '@mui/material';
import { 
  Code, 
  PhoneAndroid, 
  Brush, 
  Search, 
  CloudQueue, 
  Support 
} from '@mui/icons-material';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and more.',
      icon: <Code sx={{ fontSize: 40 }} />,
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused']
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using Flutter and React Native.',
      icon: <PhoneAndroid sx={{ fontSize: 40 }} />,
      features: ['iOS & Android', 'Native Performance', 'Cross-platform']
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      icon: <Brush sx={{ fontSize: 40 }} />,
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions including SEO and PPC campaigns.',
      icon: <Search sx={{ fontSize: 40 }} />,
      features: ['SEO Optimization', 'PPC Management', 'Analytics']
    },
    {
      id: 5,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      icon: <CloudQueue sx={{ fontSize: 40 }} />,
      features: ['AWS/Azure', 'CI/CD Pipeline', 'Monitoring']
    },
    {
      id: 6,
      title: 'Consulting',
      description: 'Technical consulting and project management for your digital initiatives.',
      icon: <Support sx={{ fontSize: 40 }} />,
      features: ['Technical Review', 'Architecture Design', 'Project Planning']
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary" fontWeight="bold">
          Services
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Comprehensive digital solutions to help your business grow and succeed in the digital world
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <Box sx={{ textAlign: 'left' }}>
                  {service.features.map((feature, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                      • {feature}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button variant="outlined" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
