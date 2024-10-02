import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import ucmMap from '../Assets/ucmmap.svg';

const ContactPage = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(to bottom, #342153 0%, #C0593A 50%, #D77B26 100%)'
      }}
    >
      <Grid
        container
        spacing={0}
        className="Contact-Us-container"
        sx={{
          marginX: 'auto',
          maxWidth: '1280px'
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          mt={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={ucmMap}
            alt="UCM Map"
            style={{ height: 400, width: 'auto' }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          my={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Container component="main" maxWidth="sm" sx={{ color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1">
              We would love to hear from you! Please fill out the form below and
              we will get back to you as soon as possible.
            </Typography>
            <Box
              sx={{
                mt: 3,
                borderRadius: 1,
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.paper',
                padding: (theme) =>
                  `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(
                    2
                  )}`
              }}
            >
              <iframe
                src="https://tally.so/embed/nPYQEB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                style={{ flexGrow: 1 }}
                title="Contact Us"
                loading="lazy"
                width="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
              />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
