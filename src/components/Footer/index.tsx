import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const StyledFooter = styled('footer')(({ theme }) => ({
    height: '68px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderTop: `solid 1px ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default
}));

function Footer() {
    return (
        <StyledFooter>
            <Typography variant="body1" sx={{alignSelf: 'center'}}>
                Build with and inspired by <Link target='_blank' underline="none" href='https://vitejs.dev/'>Vite</Link>
            </Typography>
        </StyledFooter>
    ) 
}

export default Footer;