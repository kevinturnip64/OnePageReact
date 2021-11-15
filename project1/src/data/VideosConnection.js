import axios from 'axios';

export const VideosData = {
    getDataMovies,
}

async function getDataMovies() {
    let axiosConfig =  {
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': '1b66747878msha2e436a1a45bdcep184db9jsnbf0026cb3df1'
        }
    };
    return await axios({
        method: 'GET',
        headers: 
            axiosConfig.headers
        ,
        params: {
            "nconst": 'nm0001667', 
            "region": 'US'
        },
        url : process.env.REACT_APP_MOCK_VIDEOS+'resource',
        //url: 'https://imdb8.p.rapidapi.com/actors/get-all-videos',
    }).then(result => {
        return (result.data.videos)
    })
}