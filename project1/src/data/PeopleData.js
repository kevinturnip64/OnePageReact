import { appBarClasses } from '@mui/material';
import axios from 'axios';

export const PeopleData = {
    getDataPeople,
}

async function getDataPeople() {
    console.log(process.env.REACT_APP_MOCK_PEOPLE+'People_List')
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
        url: process.env.REACT_APP_MOCK_PEOPLE+'People_List',
    }).then(result => {
        return result.data
    })
}