import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Title () {
    return (
        <>
            <Typography variant="h4" sx={{
                backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)', 
                boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
                }}>
                Alessandro Zucco
            </Typography>
            <Typography variant="subtitle1">
                Web Developer            
            </Typography>
            <Typography variant="body1">
                Turin based. Born January 28, 1988. 
                Web development enthusiast. 
                Working as fullstack developer since 2018.
                My favourite language is JS.          
            </Typography>
            <Button
                size="large"
                variant="contained"
            >
                Let's speak the code
            </Button>  
        </>
    )
}

export default Title;