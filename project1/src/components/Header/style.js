import { makeStyles } from "@material-ui/styles";
import { styled, alpha } from '@mui/material/styles';

export default makeStyles(theme => ({
    Container:{
        padding:'1em 0',
        width:'100%',
        },
    content1:{
        width:'25%'
    },
    Logo:{
        paddingLeft:'1%',
        color:'#fff',
        fontSize:'2vw',
    },
    content2:{
        width:'30%',
        height:'100%',
    },
    searchBox:{
        padding:'.2em',
        width:'20vw',
        height:'2vw',
        opacity:'0.88',
        backgroundColor:'white',
        '&:hover': {
            backgroundColor: 'white',
            opacity:'1'
        },
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        border:'none',
        boxShadow:'none'
    },
    content3:{
        width:'20%',
    },
    btnUpload:{
        width:'5vw',
        height:'2vw',
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'white',
        opacity:'0.88',
        '&:hover': {
            backgroundColor: 'white',
            opacity:'1'
        },
        fontSize:'1vw',
        border:'none'
    },
    content4:{
        width:'25%'
    },
    Profile:{
        width:'2vw',
        height:'2vw',
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    ProfileName:{
        display:'flex',
        flexDirection:'column'
    },
    FirstName:{
        fontSize:'.8vw',
        color:'white',
        opacity:'0.88'
    },
    Lastname:{
        fontSize:'.8vw',
        color:'white',
        opacity:'0.88'
    }
}));