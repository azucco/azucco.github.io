import './index.scss';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header () {
    return (
        <header>
            <a href='https://github.com/azucco/azucco.github.io' target="_blank"><GitHubIcon fontSize="large"></GitHubIcon></a>
        </header>
    )
}

export default Header;