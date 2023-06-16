import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { IconType } from 'react-icons/lib';
import { SiGithub } from "react-icons/si";
import { BiDownload } from "react-icons/bi";

type TitleButton = {
    text: string;
    action: Function;
    variant: string;
    Icon: IconType;
}

const buttons: TitleButton[] = [
    {
        text: 'Let the code speaks',
        action: () => window.open('https://github.com/azucco/azucco.github.io'),
        variant: 'contained',
        Icon: SiGithub
    },
    {
        text: 'My resume',
        action: () => { },
        variant: 'outlined',
        Icon: BiDownload
    },
];

const ButtonsContainer = styled('div')(({ theme }) => ({
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
            <Typography variant="h1">
                Alessandro Zucco
            </Typography>
            <Typography variant="h2">
                Web developer
            </Typography>
            <Typography variant="body1" color='secondary' sx={{ padding: '25px 0px 30px 0px' }}>
                <b>Turin</b> based. Born <b>January 28, 1988</b>.
                <br />Web development enthusiast.
                <br />Working as <b>fullstack developer</b> since 2018.
                <br />My favourite language is <b>JS</b>.
            </Typography>
            <ButtonsContainer>
                {
                    buttons.map(({text, action, variant, Icon}, index) =>
                        <Button
                            color='primary'
                            onClick={action}
                            key={index}
                            sx={{ margin: '0px 12px 12px 0px', borderRadius: '25px' }}
                            size="large"
                            variant={variant}
                            startIcon={<Icon/>}
                        >
                            {text}
                        </Button>
                    )
                }
            </ButtonsContainer>
        </>
    )
}

export default Title;