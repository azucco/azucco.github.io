import { Grid, Container, Typography } from '@mui/material';
import Title from './components/Title';
import AppBar from './components/AppBar';
import * as SC from './components/SkillCard';
import * as ET from './components/ExperienceTimeline';
import * as data from './data';
import { SxProps, Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useElementOnScreen from './hook/useElementOnScreen';

const theme: Theme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: red[500],
    // },
  },
  shape: {
    borderRadius: 15,
  },
  typography: {
    // fontFamily: 'Inter Var, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
});

function App() {

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  })

  const skillCardMd: number = data.skills.length > 6 ? 3 : 4;

  const sectionStyle: SxProps = { padding: '30px 0px 30px 0px' };
  const TypographyContainerStyle: SxProps = { padding: '30px 0px 20px 0px' };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar></AppBar>
        <Container fixed maxWidth="lg" sx={{ marginTop: '100px' }}>
          <Grid container>
            <Grid item xs={12} md={6} sx={sectionStyle}><Title></Title></Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item ref={containerRef} xs={12} md={12} sx={TypographyContainerStyle}>
              <Typography id={SC.id} variant="h3">
                Skills and proficency
              </Typography>
            </Grid>
            <Grid container sx={sectionStyle}>
              {
                data.skills.map((skill, index) =>
                  <Grid item key={index} xs={12} md={skillCardMd} sx={{ marginBottom: '20px'}}>
                    <SC.SkillCard {...skill} isVisible={isVisible}></SC.SkillCard>
                  </Grid>)
              }
            </Grid>
            <Grid item key={ET.id} xs={12} md={12} sx={TypographyContainerStyle}>
              <Typography id={ET.id} variant="h3">
                Experience and education
              </Typography>
            </Grid>
            <Grid item key='experience' xs={12} md={12} sx={sectionStyle}>
              <ET.ExperienceTimeline></ET.ExperienceTimeline>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
