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
import { Sections } from '../../App';

type AppBarProps = {
  sections: Sections,
  toggleColorMode: Function,
}

const Android12Switch: SwitchProps & StyledCommonProps<Theme> & { mode: string, theme: Theme } = styled(Switch, {
  shouldForwardProp: (prop) => prop !== "mode"
})(({ mode, theme }: { mode: string, theme: Theme }) => ({
  padding: 8,
  '& .Mui-checked': {
    color: theme.palette.background.paper,
  },
  '& .MuiSwitch-switchBase:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiSwitch-switchBase.Mui-checked:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: 'transparent!important',
    backgroundImage: mode === 'dark' ? 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))' : 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
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
    backgroundSize: '16px 12px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: mode === 'dark' ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"/></svg>')`
      : `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path fill="${encodeURIComponent(theme.palette.text.primary,)}" d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>')`,
    color: theme.palette.background.default,
    boxShadow: 'none',
    width: 18,
    height: 18,
    margin: 1,
  },
}));

function ResponsiveAppBar({ sections, toggleColorMode }: AppBarProps) {
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

  const handleCloseNavMenu = (id: string) => {
    const yOffset = -80;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
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
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {sections.map((section) => (
              <Button
                key={section.label}
                onClick={() => handleCloseNavMenu(section.id)}
                color={ section.isVisible ? 'primary' : 'secondary'}
                sx={{ my: 2, display: 'block' }}
              >
                {_.capitalize(section.label)}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={`Toggle ${theme.palette.mode === 'dark' ? 'light' : 'dark'} mode`}>
              <Android12Switch mode={theme.palette.mode} disableRipple onClick={() => {
                setIsTransitionEnabled(false);
                toggleColorMode();
              }} />
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ fontSize: 21 }} disableRipple onClick={() => window.open('https://www.linkedin.com/in/alessandro-zucco-81b7b2137/', "_blank")}>
              <BsLinkedin />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;