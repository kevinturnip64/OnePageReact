import useStyles from "./style";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function Breadcrumb(props) {
    var classes = useStyles();


    const handleClick = () => {
        console.log('clicked');
    }

    return (
        <div role="presentation" onClick={handleClick} className={classes.Container}>
            <Breadcrumbs aria-label="breadcrumb" style={{color:'white', opacity:'0.88'}} >
                <Link 
                    underline="hover" 
                    color="inherit" 
                    href="/"
                    className={classes.Link}
                >
                    Dashboard
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/Videos"
                    className={classes.Link}
                >
                    Videos
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/People"
                    className={classes.Link}
                >
                    People
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/Documents"
                    className={classes.Link}
                >
                    Documents
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/Events"
                    className={classes.Link}
                >
                    Events
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/Favorites"
                    className={classes.Link}
                >
                    Favorites
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/Channels"
                    className={classes.Link}
                >
                    Channels
                </Link>
            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb;