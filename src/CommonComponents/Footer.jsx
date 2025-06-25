import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Link,
    IconButton,
    TextField,
    Button,
} from '@mui/material';
import {
    Twitter,
    Facebook,
    YouTube,
    LinkedIn,
    LocationOn,
    Phone,
    Email,
} from '@mui/icons-material';

import cat1 from '../assets/images/cat-1.jpg';
import cat2 from '../assets/images/cat-2.jpg';
import cat3 from '../assets/images/cat-3.jpg';
import cat4 from '../assets/images/cat-4.jpg';

const Footer = () => {
    const images = [cat1, cat2, cat3, cat4, cat1, cat2];

    return (
        <Box sx={{ bgcolor: 'black', color: 'white', pt: 5, mt: 5 }}>
            <Box
                sx={{
                    px: { xs: 3, md: 10 },
                    py: 5,
                    overflowX: 'auto',
                }}
            >
                <Grid
                    container
                    spacing={5}
                    sx={{
                        flexWrap: 'nowrap',
                        display: 'flex',
                        minWidth: '800px',
                    }}
                >
                    {/* Quick Links */}
                    <Grid item sx={{ minWidth: 250 }}>
                        <Typography variant="h6" gutterBottom>
                            Quick Link
                        </Typography>
                        {['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Condition', 'FAQs & Help'].map((text) => (
                            <Link href="#" key={text} underline="none" color="inherit" display="block" sx={{ mb: 1 }}>
                                {text}
                            </Link>
                        ))}
                    </Grid>

                    {/* Contact */}
                    <Grid item sx={{ minWidth: 250 }}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LocationOn sx={{ mr: 1 }} /> 123 Street, New York, USA
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Phone sx={{ mr: 1 }} /> +012 345 67890
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Email sx={{ mr: 1 }} /> info@example.com
                        </Typography>
                        <Box>
                            <IconButton sx={{ color: 'white' }}><Twitter /></IconButton>
                            <IconButton sx={{ color: 'white' }}><Facebook /></IconButton>
                            <IconButton sx={{ color: 'white' }}><YouTube /></IconButton>
                            <IconButton sx={{ color: 'white' }}><LinkedIn /></IconButton>
                        </Box>
                    </Grid>

                    {/* Gallery */}
                    <Grid item sx={{ minWidth: 250 }}>
                        <Typography variant="h6" gutterBottom>
                            Gallery
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto' }}>
                            {images.map((imgSrc, index) => (
                                <Box
                                    key={index}
                                    component="img"
                                    src={imgSrc}
                                    alt={`Gallery ${index + 1}`}
                                    sx={{ width: 20, bgcolor: 'white', p: 0.5 }}
                                />
                            ))}
                        </Box>
                    </Grid>

                    {/* Newsletter */}
                    <Grid item sx={{ minWidth: 250 }}>
                        <Typography variant="h6" gutterBottom>
                            Newsletter
                        </Typography>
                        <Typography variant="body2" mb={2}>
                            Dolor amet sit justo amet elitr clita ipsum elitr est.
                        </Typography>
                        <Box sx={{ position: 'relative', maxWidth: 400 }}>
                            <TextField
                                fullWidth
                                placeholder="Your email"
                                variant="filled"
                                sx={{
                                    bgcolor: 'white',
                                    borderRadius: 1,
                                    input: { py: 1.5, pl: 2 },
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{ position: 'absolute', top: 4, right: 4 }}
                            >
                                SignUp
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                {/* Footer Bottom */}
                <Box sx={{ borderTop: '1px solid #444', mt: 5, pt: 3 }}>
                    <Grid container spacing={2} justifyContent="space-between">
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="body2"
                                sx={{ textAlign: { xs: 'center', md: 'left' } }}
                            >
                                &copy; <Link href="#" color="inherit" underline="hover">Your Site Name</Link>, All Right Reserved.<br />
                                Designed by <Link href="https://htmlcodex.com" target="_blank" color="inherit" underline="hover">HTML Codex</Link><br />
                                Distributed by <Link href="https://themewagon.com" target="_blank" color="inherit" underline="hover">ThemeWagon</Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                            {['Home', 'Cookies', 'Help', 'FAQs'].map((item) => (
                                <Link key={item} href="#" color="inherit" sx={{ ml: 2 }} underline="hover">
                                    {item}
                                </Link>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;