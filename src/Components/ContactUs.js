import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Grid } from '@mui/material';
import UCMmap from '../Assets/ucmmap.svg';
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import db from '../firebase.js';

const ContactPage = () => {
  const emailRegex = /\S+@\S+\.\S+/;
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required.";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email.";
    }
    return '';
  };

  const handleSubmit = async (e) => {
    console.log(`formData: ${formData.fullName}`)


    try {
      e.preventDefault();
      const emailError = validateEmail(formData.email);
      if (emailError) {
        setErrors({ ...errors, email: emailError });
        return;
      }

      const uniqueDocId = `${formData.fullName}_${Date.now()}`;

      const colRef = doc(db, "contacts", uniqueDocId);


      await setDoc(colRef, {
        fullName: formData.fullName,
        email: formData.email,
        message: formData.message,
        submittedAt: new Date()
      });

      console.log("Document written successfully!");

      setFormData({
        fullName: '',
        email: '',
        message: '',
      });

    } catch (error) {
      console.error("Error adding document: ", error);

    }
  };

  return (
    <>
    <Grid container spacing={0} className="Contact-Us-container" sx={{ backgroundColor: 'background.default' }}>
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
                We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, 
                bgcolor: 'background.paper',
                borderRadius: 1,
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
                  error={!!errors.email}
                  helperText={errors.email || ''}
                  autoComplete="email"
                  type="email"
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
