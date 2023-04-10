import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Title () {
    return (
        <>
            <Typography variant="h2" sx={{
                // backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)', 
                // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
                }}>
                Alessandro Zucco
            </Typography>
            <Typography variant="h3">
                Web Developer            
            </Typography>
            <Typography variant="h5">
                <b>Turin</b> based. Born <b>January 28, 1988</b>. 
                <br/>Web development enthusiast. 
                <br/>Working as <b>fullstack developer</b> since 2018.
                <br/>My favourite language is <b>JS</b>.          
            </Typography>
            <Button
                size="large"
                variant="contained"
            >
                Let the code speaks
            </Button> 
            <Button
                size="large"
                variant="outlined"
            >
                My resume
            </Button>  
        </>
    )
}

export default Title;