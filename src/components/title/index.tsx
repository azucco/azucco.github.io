import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

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
];

const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
        justifyContent: 'flex-start',
    }
  }));

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
            <Root>
                {
                    buttons.map((button, index) =>
                        <Button
                            key={index}
                            sx={{ margin: '0px 12px 12px 0px' }}
                            size="large"
                            variant={button.variant}
                        >
                            {button.text}
                        </Button>
                    )
                }
            </Root>
        </>
    )
}

export default Title;