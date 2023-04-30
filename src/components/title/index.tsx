import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


type TitleButton = {
    text: string;
    action: Function;
    variant: string;
}

const buttons: TitleButton[] = [
    {
        text: 'Let the code speaks',
        action: () => {},
        variant: 'contained'
    },
    {
        text: 'My resume',
        action:  () => {},
        variant: 'outlined'
    },
]

function Title() {
    return (
        <>
            <Typography variant="h2" sx={{
                padding: '5px 0px 5px 0px'
                // backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)', 
                // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
            }}>
                Alessandro Zucco
            </Typography>
            <Typography variant="h3" sx={{ padding: '5px 0px 5px 0px' }}>
                Web Developer
            </Typography>
            <Typography variant="h5" sx={{ padding: '30px 0px 30px 0px', lineHeight: '40px' }}>
                <b>Turin</b> based. Born <b>January 28, 1988</b>.
                <br />Web development enthusiast.
                <br />Working as <b>fullstack developer</b> since 2018.
                <br />My favourite language is <b>JS</b>.
            </Typography>
            {
                buttons.map((button, index) =>
                    <Button
                        sx={{marginRight: '10px', marginBottom: '20px'}}
                        size="large"
                        variant={button.variant}
                    >
                        {button.text}
                    </Button>
                )
            }
        </>
    )
}

export default Title;