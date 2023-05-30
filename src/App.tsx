import { useMemo, useState } from 'react';
import { Grid, Container, Typography, PaletteMode } from '@mui/material';
import Title from './components/Title';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import * as SC from './components/SkillCard';
import * as ET from './components/ExperienceTimeline';
import * as data from './data';
import { Shadows, SxProps, ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import useElementOnScreen from './hook/useElementOnScreen';
import { palette } from './styles/palette';
import useMediaQuery from '@mui/material/useMediaQuery';

export type Sections = { label: string, id: string, isVisible: boolean }[];

const shadows: Shadows = [...Array(25).keys()].map(el => 'none');

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(palette[`${mode}`]),
  },
  shadows: shadows,
  shape: {
    borderRadius: 15,
  },
  typography: {
    fontFamily: 'Inter Var, system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '56px',
      fontWeight: 'bold',
      ...gradientStyle

    },
    h2: {
      fontSize: '48px',
      fontWeight: 'bold',
    },
    body1: {
      // fontSize: '24px',
    },
  },
});

const gradientStyle = {
  backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  backgroundClip: 'text',
  color: 'transparent'
}

function App() {

  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const [SCcontainerRef, isSCVisible] = useElementOnScreen({
    onlyOn: true,
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  })

  const [SCEndRef, isSCEnded] = useElementOnScreen({
    onlyOn: false,
    root: null,
    rootMargin: "0px",
    threshold: useMediaQuery(theme.breakpoints.up('sm')) ? 0.8 : 0.3
  })
  
  const [ETEndRef, isETEnded] = useElementOnScreen({
    onlyOn: false,
    root: null,
    rootMargin: "0px",
    threshold: useMediaQuery(theme.breakpoints.up('sm')) ? 0.8 : 0.4
  })

  const sections: Sections = [
    {
      label: 'skill',
      id: SC.id,
      isVisible: isSCEnded
    },
    {
      label: 'experience',
      id: ET.id,
      isVisible: isETEnded
    },
  ]

  const skillCardMd: number = data.skills.length > 6 ? 3 : 4;

  const sectionStyle: SxProps = { padding: '30px 0px 30px 0px' };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar sections={sections} toggleColorMode={colorMode.toggleColorMode}></AppBar>
        <Container fixed maxWidth="lg" sx={{ marginTop: '100px' }}>
          <Grid container>
            <Grid item xs={12} md={6} sx={sectionStyle}>
              <Title />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Divider ref={SCcontainerRef} />
            <Grid container ref={SCEndRef} id={SC.id} sx={sectionStyle}>
              {
                data.skills.map((skill, index) =>
                  <Grid item key={index} xs={12} md={skillCardMd} sx={{ marginBottom: '20px' }}>
                    <SC.SkillCard {...skill} isVisible={isSCVisible}></SC.SkillCard>
                  </Grid>)
              }
            </Grid>
            <Grid item ref={ETEndRef} id={ET.id} xs={12} md={12} sx={sectionStyle}>
              <ET.ExperienceTimeline></ET.ExperienceTimeline>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
