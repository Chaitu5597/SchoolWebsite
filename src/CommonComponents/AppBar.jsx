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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Academics',
    children: [
      { label: 'Academics Objectives', path: '/about' },
      { label: 'Class LKG to 7th', path: '/testimonial' },
    ],
  },
  {
    label: 'Courses',
    children: [
      { label: 'Web Development', path: '/about' },
      { label: 'Data Science', path: '/courses/data' },
    ],
  },
  { 
    label: 'Pages',
    children: [
      { label: '404 Page', path: '/404' },
      { label: 'Contact', path: '/contact' },
    ],
  },
];

function CustomNavbar() {
  const [anchorEls, setAnchorEls] = React.useState({});
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  const handleOpenDropdown = (event, key) => {
    setAnchorEls((prev) => ({ ...prev, [key]: event.currentTarget }));
  };

  const handleCloseDropdown = (key) => {
    setAnchorEls((prev) => ({ ...prev, [key]: null }));
  };

  const handleOpenMobileMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <AppBar position="sticky" color="default" elevation={3}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo / Title */}
          <Typography
            variant="h4"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              fontWeight: 900,
              fontFamily: `'Caveat', cursive`,
              fontSize: '2.5rem',
              letterSpacing: '2px',
              background: 'linear-gradient(to right, #e91e63, #ff9800, #2196f3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            🎓 Sreesai Medhaa
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item, index) => {
              const key = `menu-${index}`;
              return item.children ? (
                <React.Fragment key={item.label}>
                  <Button
                    onClick={(e) => handleOpenDropdown(e, key)}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{ color: 'text.primary', fontWeight: 400 }}
                  >
                    {item.label}
                  </Button>
                  <Menu
                    anchorEl={anchorEls[key]}
                    open={Boolean(anchorEls[key])}
                    onClose={() => handleCloseDropdown(key)}
                  >
                    {item.children.map((child) => (
                      <MenuItem
                        key={child.label}
                        component={Link}
                        to={child.path}
                        onClick={() => handleCloseDropdown(key)}
                        sx={{ fontWeight: 500 }}
                      >
                        {child.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{ color: 'text.primary', fontWeight: 400 }}
                >
                  {item.label}
                </Button>
              );
            })}
            <Button
              variant="contained"
              sx={{
                ml: 3,
                px: 2,
                py: 1,
                backgroundColor: '#6A1B9A',
                color: '#fff',
                fontWeight: 400,
                '&:hover': {
                  backgroundColor: '#4A148C',
                },
                display: { xs: 'none', lg: 'inline-flex' },
              }}
              endIcon={<ArrowForwardIcon sx={{ color: '#fff' }} />}
            >
              Join Now
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenMobileMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleCloseMobileMenu}
            >
              {navItems.map((item) =>
                item.children ? (
                  <React.Fragment key={item.label}>
                    <MenuItem disabled sx={{ fontWeight: 700 }}>
                      {item.label}
                    </MenuItem>
                    {item.children.map((child) => (
                      <MenuItem
                        key={child.label}
                        component={Link}
                        to={child.path}
                        onClick={handleCloseMobileMenu}
                        sx={{ fontWeight: 500 }}
                      >
                        {child.label}
                      </MenuItem>
                    ))}
                  </React.Fragment>
                ) : (
                  <MenuItem
                    key={item.label}
                    component={Link}
                    to={item.path}
                    onClick={handleCloseMobileMenu}
                    sx={{ fontWeight: 400 }}
                  >
                    {item.label}
                  </MenuItem>
                )
              )}
              <MenuItem>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: '#6A1B9A',
                    color: '#fff',
                    fontWeight: 400,
                    '&:hover': {
                      backgroundColor: '#4A148C',
                    },
                  }}
                  endIcon={<ArrowForwardIcon sx={{ color: '#fff' }} />}
                >
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