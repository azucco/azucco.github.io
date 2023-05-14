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
    // '&:before': {
    //   backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
    //     theme.palette.getContrastText(theme.palette.primary.main),
    //   )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
    //   left: 12,
    // },
    // '&:after': {
    //   backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
    //     theme.palette.getContrastText(theme.palette.primary.main),
    //   )}" d="M19,13H5V11H19V13Z" /></svg>')`,
    //   right: 12,
    // },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    // color: 'green',
    width: 16,
    height: 16,
    margin: 2,
    // '&:before': {
    //   backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
    //     theme.palette.getContrastText(theme.palette.primary.main),
    //   )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
    //   // left: 12,
    // },
    '&:after': {
      content: '"TEST"'
      // backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
      //   theme.palette.getContrastText(theme.palette.primary.main),
      // )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      // right: 12,
    },
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