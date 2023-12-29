import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Grid } from '@mui/material';
import UCMmap from '../Assets/ucmmap.svg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };

  return (
    <>
    <Grid container spacing={0} sx={{ height: '80vh', backgroundColor: 'background.default' }}>
        <Grid item xs={12} sm={6} sx={{
          background: 'linear-gradient(to bottom, #342153 0%, #C0593A 50%, #D77B26 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <img src={UCMmap} alt="UCM Map" style={{ width: 400, height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={6} sx={{
          background: 'linear-gradient(to bottom, #342153 0%, #C0593A 50%, #D77B26 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            <Container component="main" maxWidth="sm" sx={{ mb: 4,
                color: 'white'
            }}>
                <Typography variant="h4" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1">
                    Feel like contacting us? Submit your queries here and we will get back to you as soon as possible.
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, 
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    // make left and right paddding the same as the top and bottom padding
                    padding: (theme) => `${theme.spacing(2)} ${theme.spacing(3)}`,
                }}>
                    <TextField
                    required
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    name="fullName"
                    margin="normal"
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    autoFocus
                    />
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    />
                    <TextField
                    required
                    fullWidth
                    id="message"
                    label="Your Message"
                    name="message"
                    margin="normal"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
                    >
                    Submit
                    </Button>
                </Box>
            </Container>
        </Grid>
    </Grid>
    {/* </Box> */}
    </>
  );
};

export default ContactPage;
