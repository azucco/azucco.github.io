import { Grid } from '@mui/material';
import Box from '@mui/material/Box/Box';
import './App.scss';
import Header from './components/header';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box sx={{ bgcolor: 'yellow', height: '100vh' }}>
        <Grid container>
          <Grid xs={12}>
            <Header></Header>
          </Grid>
          <Grid id='hl' xs={12} md={6}>HL</Grid>
          <Grid id='hr' xs={12} md={6}>HR</Grid>
          <Grid id='ll' xs={12} md={6}>LL</Grid>
          <Grid id='lr' xs={12} md={6}>LR</Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default App
