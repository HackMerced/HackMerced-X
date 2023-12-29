import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, CssBaseline, Paper } from '@mui/material';

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
          <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, #342153 0%, #C0593A 50%, #D77B26 100%)',
          p: 2
        }}
      >
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper elevation={6} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Feel like contacting us? Submit your queries here and we will get back to you as soon as possible.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
        </Paper>
      </Container>
        </Box>
    </>
  );
};

export default ContactPage;
