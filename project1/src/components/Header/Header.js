import React from "react";
import {
    Button,
    ButtonUnstyled,
    Grid,
    TextField,
    Typography
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/Upload';
import PersonIcon from '@mui/icons-material/Person';

import useStyles from "./style";
import Styles from "./styles2";

function Header(props){
    var classes = useStyles();
    function CustomButton(props) {
        return <ButtonUnstyled {...props} component={Styles.ButtonUpload} />;
    }

    return (
        <div className={classes.Container}>
            <div style={{ display: 'flex',width:'100%', alignItems:'center'}}>
                <div className={classes.content1}>
                    <div className={classes.Logo}>
                        <span style={{ fontWeight: '700' }}>Social</span>Network
                    </div>
                </div>
                <div className={classes.content2}>
                    <div className={classes.searchBox}>
                        <SearchIcon style={{width:'1.2vw',height:'1.2vw'}}/>
                        <input placeholder="Find" style={{width:'20vw',height:'2vw',WebkitAppearance:'none',border:'0',fontSize:'.8vw'}} ></input>
                    </div>
                </div>
                <div className={classes.content3}>
                    <div style={{padding:'0 10%'}}>
                        <button className={classes.btnUpload}> 
                            <UploadIcon style={{width:'1vw',height:'2vw',}}/>Upload
                        </button>
                    </div>
                </div>
                <div className={classes.content4}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div className={classes.Profile}> 
                            <PersonIcon style={{width:'5vw',height:'2vw',}}/>
                        </div>
                        <div className={classes.ProfileName}>
                            <div className={classes.FirstName}>Firstname</div>
                            <div className={classes.Lastname}>Lastname</div>
                        </div>
                    </div>
                </div>

                {/* <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div className={classes.Logo}>
                            <span style={{ fontWeight: '700' }}>Social</span>Network
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.searchBox}>
                            <SearchIcon />
                            <TextField variant="standard" fullWidth placeholder="Find" />
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <button className={classes.btnUpload} >
                            <UploadIcon/>Upload
                        </button>
                    </Grid>
                    <Grid item xs={3} style={{display:'flex'}}>
                        <div className={classes.Profile}>
                            <PersonIcon/>
                        </div>
                        <Typography variant="h6" color="white">Profile</Typography>
                    </Grid>
                </Grid> */}
            </div>
        </div>
    )
}

export default Header;