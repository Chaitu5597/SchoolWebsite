import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Contact', path: '/contact' },
];

const dropdownPages = [
  { label: 'Our Team', path: '/team' },
  { label: 'Testimonial', path: '/testimonial' },
  { label: '404 Page', path: '/404' },
];

function CustomNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElDropdown, setAnchorElDropdown] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenDropdown = (event) => {
    setAnchorElDropdown(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseDropdown = () => {
    setAnchorElDropdown(null);
  };

  return (
    <AppBar position="sticky" color="default" elevation={3}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 700,
              px: 2,
            }}
          >
            <i className="fa fa-book" style={{ marginRight: 8 }}></i> eLEARNING
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                sx={{ color: 'text.primary' }}
              >
                {page.label}
              </Button>
            ))}
            <Button
              onClick={handleOpenDropdown}
              endIcon={<ArrowDropDownIcon />}
              sx={{ color: 'text.primary' }}
            >
              Pages
            </Button>
            <Menu
              anchorEl={anchorElDropdown}
              open={Boolean(anchorElDropdown)}
              onClose={handleCloseDropdown}
            >
              {dropdownPages.map((item) => (
                <MenuItem
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={handleCloseDropdown}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 3, px: 4, py: 1.5, display: { xs: 'none', lg: 'inline-flex' } }}
            >
              Join Now <i className="fa fa-arrow-right" style={{ marginLeft: 8 }}></i>
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                >
                  {page.label}
                </MenuItem>
              ))}
              <MenuItem onClick={handleOpenDropdown}>Pages</MenuItem>
              {dropdownPages.map((item) => (
                <MenuItem
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={handleCloseDropdown}
                >
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem>
                <Button variant="contained" fullWidth>
                  Join Now
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default CustomNavbar;