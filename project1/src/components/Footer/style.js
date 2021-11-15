import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    Container:{
        padding:'.5vw 0',
        minHeight:'2vw',
        borderTop:'1px solid #fff',
        marginTop:'1vw',
        display:'flex',
        flexDirection:'column'
    },
    Social:{
        width:'50vw',
        display:'flex'
    },
    BoxIcon:{
        margin:'.5vw',
        backgroundColor:'white',
        opacity:'0.88',
        padding:'.3vw',
        width:'1vw'
    },
    Linked:{
        fontSize:'.8vw',
        color:'white',
        opacity:'0.88'
    },
    Copyright:{
        fontSize:'.8vw',
        color:'white',
        opacity:'0.88'
    }
}));