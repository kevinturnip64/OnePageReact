import React from "react";
import useStyles from "./style";


import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer(props){
    var classes = useStyles();

    return(
        <div className={classes.Container}>
            <div className={classes.Social}>
                <div className={classes.BoxIcon}>
                    <TwitterIcon style={{width:'1vw', height:'1vw'}}/>
                </div>
                <div className={classes.BoxIcon}>
                    <LinkedInIcon style={{width:'1vw', height:'1vw'}}/>
                </div>
                <div className={classes.BoxIcon}>
                    <FacebookIcon style={{width:'1vw', height:'1vw'}}/>
                </div>
            </div>
            <div className={classes.Linked}>
                About / For Business / Suggestion / Help & FAQs / Contacts / Pricing
            </div>
            <div className={classes.Copyright}>
                Copyright 2013 company inc.
            </div>
        </div>
    )
}

export default Footer;