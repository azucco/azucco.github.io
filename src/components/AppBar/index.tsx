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
import { BsLinkedin } from "react-icons/bs";
import { Theme, useTheme } from '@mui/material/styles';
import { styled, StyledCommonProps } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

const pages = ['skills', 'experience'];

type AppBarProps = {
  toggleColorMode: Function,
}

const Android12Switch: SwitchProps & StyledCommonProps<Theme> & { mode: string, theme: Theme } = styled(Switch, {
  shouldForwardProp: (prop) => prop !== "mode"
})(({ mode, theme }: { mode: string, theme: Theme }) => ({
  padding: 8,
  '& .Mui-checked': {
    color: theme.palette.background.paper,
  },
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: theme.palette.background.paper + '!important',
    border: `1px solid ${theme.palette.secondary.main}`,
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
    backgroundSize: '16px 14px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: mode === 'dark' ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"/></svg>')`
      : `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 15 16"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>')`,
    color: theme.palette.background.default,
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
              <Android12Switch mode={theme.palette.mode} defaultChecked onClick={() => {
                setIsTransitionEnabled(false);
                toggleColorMode();
              }} />
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ fontSize: 22 }} disableRipple onClick={() => window.open('https://www.linkedin.com/in/alessandro-zucco-81b7b2137/', "_blank")}>
              <BsLinkedin />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;