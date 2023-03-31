import { Grid, Container, Box } from '@mui/material';
import './App.scss';
import Title from './components/title';
import AppBar from './components/AppBar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppBar></AppBar>
      <Container fixed maxWidth="lg" sx={{ bgcolor: '#cfe8fc', marginTop: '64px'}}>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <Grid container>
          <Grid id='hl' xs={12} md={6}><Title></Title></Grid>
          <Grid id='hr' xs={12} md={6}>HR</Grid>
        </Grid>
      </Container>
        {/* <Grid container>
        
          <Container maxWidth="lg">
            <Grid id='hl' xs={12} md={6}><Title></Title></Grid>
            <Grid id='hr' xs={12} md={6}>HR</Grid>
            <Grid id='ll' xs={12} md={6}>LL</Grid>
            <Grid id='lr' xs={12} md={6}>LR</Grid>
          </Container>
        </Grid> */}
    </div>
  )
}

export default App
