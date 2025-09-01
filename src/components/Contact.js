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

  const mapsQuery = encodeURIComponent('Thotathady, India');
  const mapsLink = `https://www.google.com/maps?q=${mapsQuery}`;
  const mapsEmbed = `${mapsLink}&output=embed`;
  const emailAddress = 'joelvalookaran@gmail.com';
  const emailSubject = 'Hello';
  const emailBody = 'hii joel';
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const telNumber = '+919880219154';
    const telUrl = `tel:${telNumber}`;
    // Attempt to open the dialer on supported devices
    window.location.href = telUrl;
  };

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
              <Card
                key={index}
                elevation={3}
                sx={{ p: 3, ...((info.title === 'Location' || info.title === 'Email' || info.title === 'Phone') && { cursor: 'pointer' }) }}
                {...(info.title === 'Location'
                  ? { component: 'a', href: mapsLink, target: '_blank', rel: 'noopener noreferrer' }
                  : info.title === 'Email'
                  ? {
                      component: 'a',
                      href: mailtoLink,
                      onClick: (e) => {
                        e.preventDefault();
                        window.location.href = mailtoLink;
                      },
                      role: 'link',
                      tabIndex: 0
                    }
                  : info.title === 'Phone'
                  ? { component: 'a', href: `tel:${info.detail.replace(/\s+/g, '')}` }
                  : {})}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ color: info.color }}>
                    {info.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.title === 'Phone' ? (
                        <a
                          href={`tel:${info.detail.replace(/\s+/g, '')}`}
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          {info.detail}
                        </a>
                      ) : (
                        info.detail
                      )}
                    </Typography>
                    {info.title === 'Phone' && (
                      <Box sx={{ mt: 1.5 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={(e) => {
                            e.preventDefault();
                            const tel = `tel:${info.detail.replace(/\s+/g, '')}`;
                            window.location.href = tel;
                          }}
                        >
                          Call now
                        </Button>
                      </Box>
                    )}
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
            <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    name="fromEmail"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
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
                    name="message"
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

        {/* Location & Map */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 0, overflow: 'hidden', borderRadius: 2 }}>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="h6" component="h3" fontWeight="bold" color="primary">
                Location
              </Typography>
              <Button
                component="a"
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="small"
              >
                Open in Google Maps
              </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 280, sm: 360, md: 420 } }}>
              <iframe
                title="map"
                src={mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
