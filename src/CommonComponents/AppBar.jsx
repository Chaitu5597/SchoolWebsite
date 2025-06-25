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

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    children: [
      { label: 'Our Team', path: '/about' },
      { label: 'Testimonial', path: '/testimonial' },
    ],
  },
  {
    label: 'Courses',
    children: [
      { label: 'Web Development', path: '/courses/web' },
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
            {navItems.map((item, index) => {
              const key = `menu-${index}`;
              return item.children ? (
                <React.Fragment key={item.label}>
                  <Button
                    onClick={(e) => handleOpenDropdown(e, key)}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{ color: 'text.primary' }}
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
                  sx={{ color: 'text.primary' }}
                >
                  {item.label}
                </Button>
              );
            })}
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
                    <MenuItem disabled>{item.label}</MenuItem>
                    {item.children.map((child) => (
                      <MenuItem
                        key={child.label}
                        component={Link}
                        to={child.path}
                        onClick={handleCloseMobileMenu}
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
                  >
                    {item.label}
                  </MenuItem>
                )
              )}
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