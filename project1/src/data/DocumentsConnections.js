import { appBarClasses } from '@mui/material';
import axios from 'axios';

export const DocumentsData = {
    getDataDocuments,
}

async function getDataDocuments() {
    let axiosConfig =  {
        headers: {
            'x-rapidapi-host': 'binubuo.p.rapidapi.com',
            'x-rapidapi-key': '1b66747878msha2e436a1a45bdcep184db9jsnbf0026cb3df1'
        }
    };
    return await axios({
        method: 'GET',
        headers: 
            axiosConfig.headers
        ,
        url: process.env.REACT_APP_MOCK_DOCUMENTS+'Data',
    }).then(result => {
        console.log(result)
        return result
    })
}