import { Grid, Container } from '@mui/material';
import './App.scss';
import Title from './components/title';
import AppBar from './components/AppBar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppBar></AppBar>
        {/* <Grid container>
          <Grid xs={12}>
            <Header></Header>
          </Grid>
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
