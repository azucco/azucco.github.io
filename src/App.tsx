import { Grid, Container, Divider } from '@mui/material';
import './App.scss';
import Title from './components/Title';
import AppBar from './components/AppBar';
import * as SK from './components/SkillCard';
import CareerStepper from './components/CareerStepper';
import skills from './data';

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <Container fixed maxWidth="lg" sx={{ marginTop: '64px'}}>
        <Grid container>
          <Grid id='hl' xs={12} md={6}><Title></Title></Grid>
          <Grid id='hr' xs={12} md={6}>HR</Grid>
          { 
            skills.map((skill) => <Grid xs={12} md={3}><SK.SkillCard {...skill}></SK.SkillCard></Grid>) 
          }
        </Grid>
        <CareerStepper></CareerStepper>
      </Container>
    </div>
  )
}

export default App
