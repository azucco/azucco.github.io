import { Grid, Container, Typography } from '@mui/material';
import Title from './components/Title';
import AppBar from './components/AppBar';
import * as SC from './components/SkillCard';
import * as ET from './components/ExperienceTimeline';
import * as data from './data';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useElementOnScreen from './hook/useElementOnScreen';

const theme :Theme = createTheme({
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

  const [ containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar></AppBar>
        <Container fixed maxWidth="lg" sx={{ marginTop: '64px'}}>
          <Grid container>
            <Grid item xs={12} md={6}><Title></Title></Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item ref={containerRef} xs={12} md={12}>
              <Typography id={SC.id} variant="h3">
                Skills and proficency
              </Typography>
            </Grid>
            { 
              data.skills.map((skill, index) => <Grid item key={index} xs={12} md={3}><SC.SkillCard {...skill} isVisible={isVisible}></SC.SkillCard></Grid>) 
            }
          </Grid>
          <Grid container>
            <Grid item key='experience' xs={12} md={12}>
              <Typography id={ET.id} variant="h3">
                  Experience and education              
              </Typography>
              <ET.ExperienceTimeline></ET.ExperienceTimeline>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
