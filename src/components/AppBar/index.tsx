import { useState, useEffect } from 'react';
import * as _ from 'lodash';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { MdOutlineBrightness1, MdOutlineBrightness2 } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const pages = ['skills', 'experience'];

type AppBarProps = {
  toggleColorMode: Function,
}

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
  },
  '& .MuiSwitch-thumb': {
    content: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 352 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path fill="${encodeURIComponent(theme.palette.getContrastText(theme.palette.primary.main),)}" d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"/></svg>')`,
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

function ResponsiveAppBar({ toggleColorMode }: AppBarProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isTransitionEnabled) {
      setIsTransitionEnabled(!isTransitionEnabled);
    }
  }, [theme.palette.mode])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    const element = document.getElementById(`${page}`);
    element.scrollIntoView({ behavior: "smooth" });
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{
      borderBottom: scrollTop === 0 ? 'none' : `solid 1px ${theme.palette.divider}`,
      backgroundColor: scrollTop === 0 ? 'transparent' : theme.palette.background.default,
      transition: isTransitionEnabled ? 'background-color 0.5s' : '',
      backgroundImage: 'none'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              // color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            // color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{_.capitalize(page)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              // color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                color='secondary'
                sx={{ my: 2, display: 'block' }}
              >
                {_.capitalize(page)}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={`Toggle ${theme.palette.mode === 'dark' ? 'light' : 'dark'} mode`}>
              <Android12Switch defaultChecked onClick={() => {
                setIsTransitionEnabled(false);
                toggleColorMode();
              }} />
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={`Toggle ${theme.palette.mode === 'dark' ? 'light' : 'dark'} mode`}>
              <IconButton onClick={() => {
                setIsTransitionEnabled(false);
                toggleColorMode();
              }}>
                {theme.palette.mode === 'dark' ? <MdOutlineBrightness1 /> : <MdOutlineBrightness2 />}
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={() => window.open('https://www.linkedin.com/in/alessandro-zucco-81b7b2137/', "_blank")}>
              <BsLinkedin />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;