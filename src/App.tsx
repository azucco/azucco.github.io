import { Grid, Container, Typography } from '@mui/material';
import Title from './components/Title';
import AppBar from './components/AppBar';
import * as SK from './components/SkillCard';
import * as ET from './components/ExperienceTimeline';
import * as data from './data';

import { red } from '@mui/material/colors';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';

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
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar></AppBar>
        <Container fixed maxWidth="lg" sx={{ marginTop: '64px'}}>
          <Grid container>
            <Grid id='hl' xs={12} md={6}><Title></Title></Grid>
            <Grid id='hr' xs={12} md={6}></Grid>
            <Grid id='hr' xs={12} md={12}>
              <Typography id={SK.id} variant="h3">
                Skills              
              </Typography>
            </Grid>
            
            { 
              data.skills.map((skill) => <Grid xs={12} md={4}><SK.SkillCard {...skill}></SK.SkillCard></Grid>) 
            }
          </Grid>
          <Grid container>
            <Grid xs={12} md={12}>
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
