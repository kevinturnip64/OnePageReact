import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    Layout:{
        width:'100%',
    },
    ItemGroup:{
        width:'100%',
        minHeight:'1em',
        borderRadius:'.5em',
        margin:'1em 0',
        backgroundColor:'white',
        opacity:'0.88',
        display:'flex',
        '&:hover': {
            backgroundColor: 'white',
            opacity:'1'
        },
        boxShadow:'2px 2px #2727274d'
    },
    img:{
        padding:'1em',
    },
    img2:{
        width:'100%',
        height:'auto'
    },
    content:{
        padding:'1em',
        display:'flex',
        flexDirection:'column',
        fontSize:'1vw',
    },
    MovieTitle:{
        fontSize:'2vw',
        fontWeight:'700',
    },
    MovieType:{
        marginTop:'1em'
    }
  
}));