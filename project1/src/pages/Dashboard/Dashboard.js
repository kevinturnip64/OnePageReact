import React, { useState } from "react";
import useStyles from "./style";
import Grid from '@mui/material/Grid';

function Dashboard(props) {
    var classes = useStyles();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className={classes.Container}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div style={{ width: '100%', height: '10em', backgroundColor: 'white' }}></div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{ width: '100%', height: '10em', backgroundColor: 'white' }}></div>
                </Grid>
            </Grid>
        </div>

    )
}

export default Dashboard;