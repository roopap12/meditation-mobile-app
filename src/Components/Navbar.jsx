import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/meditation-logo.jpeg";

function Navbar({ setCurrentTab }) {
  const [anchorElYoga, setAnchorElYoga] = useState(null);
  const [anchorElMeditation, setAnchorElMeditation] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleYogaClick = (event) => {
    setAnchorElYoga(event.currentTarget);
  };

  const handleYogaClose = () => {
    setAnchorElYoga(null);
  };

  const handleMeditationClick = (event) => {
    setAnchorElMeditation(event.currentTarget);
  };

  const handleMeditationClose = () => {
    setAnchorElMeditation(null);
  };

  const handleMobileMenuClick = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
      <Link to="/" style={{ marginRight: "auto", textDecoration: "none", color: "inherit", paddingTop: "10px" }}>
        <Typography variant="h6">
          <img src={logo} alt="Logo" style={{ width: 'auto', height: '60px' }} />
        </Typography>
      </Link>
        {/* Mobile Menu Button */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuClick}
        >
          <MenuIcon />
        </IconButton>
      

        {/* Desktop Menu Items */}
        <div className="desktop-menu">
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button
            color="inherit"
            aria-controls="yoga-menu"
            aria-haspopup="true"
            onClick={handleYogaClick}
          >
            Yoga
            <ArrowDropDownIcon />
          </Button>
          <Button
            color="inherit"
            aria-controls="meditation-menu"
            aria-haspopup="true"
            onClick={handleMeditationClick}
          >
            Meditation
            <ArrowDropDownIcon />
          </Button>
          <Button component={Link} to="/Form" color="inherit">
            Registration
          </Button>
        </div>

        {/* Yoga Dropdown */}
        <Menu
          id="yoga-menu"
          anchorEl={anchorElYoga}
          keepMounted
          open={Boolean(anchorElYoga)}
          onClose={handleYogaClose}
        >
          <MenuItem component={Link} to="/Yoga?type=stress-relief" onClick={handleYogaClose}>
            Yoga for Stress Relief
          </MenuItem>
          <MenuItem component={Link} to="/Yoga?type=weight-reduce" onClick={handleYogaClose}>
            Yoga for Weight Reduction
          </MenuItem>
          <MenuItem component={Link} to="/Yoga?type=power-yoga" onClick={handleYogaClose}>
            Power Yoga
          </MenuItem>
          <MenuItem component={Link} to="/Yoga?type=neck-shoulders-back" onClick={handleYogaClose}>
            Yoga for Neck Shoulders and Back Pain
          </MenuItem>
          {/* Add more yoga types here as needed */}
        </Menu>

        {/* Meditation Dropdown */}
        <Menu
          id="meditation-menu"
          anchorEl={anchorElMeditation}
          keepMounted
          open={Boolean(anchorElMeditation)}
          onClose={handleMeditationClose}
        >
          <MenuItem component={Link} to="/Meditation?type=morning" onClick={handleMeditationClose}>
            Morning Meditation
          </MenuItem>
          <MenuItem component={Link} to="/Meditation?type=evening" onClick={handleMeditationClose}>
            Evening Meditation
          </MenuItem>
          <MenuItem component={Link} to="/Meditation?type=healing" onClick={handleMeditationClose}>
            Healing Meditation
          </MenuItem>
          <MenuItem component={Link} to="/Meditation?type=sleeping" onClick={handleMeditationClose}>
            Meditation to Sleep
          </MenuItem>
          <MenuItem component={Link} to="/Meditation?type=flute" onClick={handleMeditationClose}>
            Calming Meditation
          </MenuItem>
          {/* Add more meditation types here as needed */}
        </Menu>

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          keepMounted
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
        >
          <MenuItem component={Link} to="/" onClick={handleMobileMenuClose}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/Form" onClick={handleMobileMenuClose}>
            Registration
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleYogaClick(null);
              handleMobileMenuClose();
            }}
          >
            Yoga
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMeditationClick(null);
              handleMobileMenuClose();
            }}
          >
            Meditation
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


