import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.88),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const ButtonUpload = styled('button')(({ theme }) => ({
    backgroundColor: alpha(theme.palette.common.white, 0.88),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 1),
    },
    border:'none',
    width: '130%',
    height:'100%',
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export default {Search, SearchIconWrapper, StyledInputBase,ButtonUpload};