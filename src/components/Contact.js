import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid,
  Card,
  TextField,
  Button,
  Paper
} from '@mui/material';
import { 
  LocationOn, 
  Phone, 
  Email, 
  Send 
} from '@mui/icons-material';

const Contact = () => {
  const contactInfo = [
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: 'Location',
      detail: 'Thotathady, India',
      color: '#1976d2'
    },
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'Phone',
      detail: '+91 9880219154',
      color: '#388e3c'
    },
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'Email',
      detail: 'joelvalookaran@gmail.com',
      color: '#ff9800'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary" fontWeight="bold">
          Contact Me
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Let's discuss your project and how I can help bring your ideas to life
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {contactInfo.map((info, index) => (
              <Card key={index} elevation={3} sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ color: info.color }}>
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.detail}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" color="primary">
              Send Message
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    sx={{ px: 4, py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
