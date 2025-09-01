import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Chip, 
  Divider,
  Button,
  Container
} from '@mui/material';
import { 
  LocationOn, 
  Phone, 
  Email, 
  Download,
  Visibility
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled components for custom styling
const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '20px',
    top: 0,
    bottom: 0,
    width: '2px',
    backgroundColor: theme.palette.primary.main,
    zIndex: 1,
  },
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '16px',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  border: `2px solid ${theme.palette.background.paper}`,
  zIndex: 2,
}));

const ResumeSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  position: 'relative',
  paddingLeft: theme.spacing(6),
}));

const Resume = () => {
  const handleDownload = () => {
    // Add download functionality here
    console.log('Downloading resume...');
  };

  const handleView = () => {
    // Add view functionality here
    console.log('Viewing resume...');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom color="primary" fontWeight="bold">
            Resume
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            Are you searching for a Web Developer/Android/iOS Developer, Designer, Digital Marketer? 
            Wanna Hire me for your Vacant role? Check out my Resume here...
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              startIcon={<Visibility />}
              onClick={handleView}
              sx={{ borderRadius: 2 }}
            >
              View Resume
            </Button>
            <Button
              variant="outlined"
              startIcon={<Download />}
              onClick={handleDownload}
              sx={{ borderRadius: 2 }}
            >
              Download Resume
            </Button>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <TimelineContainer>
              {/* Summary Section */}
              <ResumeSection>
                <TimelineDot sx={{ top: '20px' }} />
                <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" color="primary">
                  Summary
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
                  JOEL
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  Innovative and deadline-driven Web Developer 
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2">Thotathady, India</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Phone color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2">+91 9880219154</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Email color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2">
                    <strong>Personal:</strong> joelvalookaran@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Email color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body2">
                    <strong>Business:</strong> joelvalookaran@gmail.com
                  </Typography>
                </Box>
              </ResumeSection>

              {/* Education Section */}
              <ResumeSection>
                <TimelineDot sx={{ top: '20px' }} />
                <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" color="primary">
                  Education
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                   POLYTECHNIC DIPLOMA IN COMPUTER SCIENCE & ENGINEERING
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    2023 - 2026
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    SDM POLYTECHNIC, UJIRE, IN
                  </Typography>
                  <Chip 
                    label="CGPA: 8.2/10" 
                    color="primary" 
                    variant="outlined" 
                    size="small"
                  />
                </Box>

                <Box>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                    PRE-UNIVERSITY
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    2021 - 2023
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    ANUGRAHA PU COLLEGE -(COMMERCE-COMPUTER SCIENCE), UJIRE, IN
                  </Typography>
                  <Chip 
                    label="CGPA: 6.5/10" 
                    color="primary" 
                    variant="outlined" 
                    size="small"
                  />
                </Box>
              </ResumeSection>
            </TimelineContainer>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <TimelineContainer>
              {/* Professional Experience Section */}
              <ResumeSection>
                <TimelineDot sx={{ top: '20px' }} />
                <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" color="primary">
                  Professional Experience
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                    SOFTWARE DEVELOPMENT 
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                   STUDENT
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    DIPLOMA IN COMPUTER SCIENCE & ENGINEERING
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                     3RD YEAR COMPUTER SCIENCE & ENGINEERING
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                    FULL STACK DEVELOPER IN REACT JS                     </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                      Developed Medical Product - "Medinous" in-house product
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                      Worked on Client Project as Web Developer
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                    STUDENT 
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    MORE KNOWLEDGE IN IT-SKILLS, CADG, PYTHON
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    SDM POLYTECHNIC UJIRE - 
                    574240
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                     REACT JS DEVELOPER
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                     FULL STACK DEVELOPER IN REACT JS
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                      Used Firestar library to interact with Firestore, NoSQL database
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                      Worked with Firebase to integrate it with React Apps
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                    FREELANCE WEB DEVELOPER AND GRAPHIC DESIGNER
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    2018 - 2021
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Self-Employed
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                      Developed responsive websites for various clients
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                      Created graphic designs for branding and marketing materials
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                      Managed client relationships and project timelines
                    </Typography>
                  </Box>
                </Box>
              </ResumeSection>
            </TimelineContainer>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Resume;
