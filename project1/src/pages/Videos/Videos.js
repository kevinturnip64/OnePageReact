import { useEffect, useState } from "react";
import useStyles from "./style";

import { VideosData } from "../../data/VideosConnection";

function Videos(props) {
    var classes = useStyles();
    useEffect(() => {
        handleGetDataAllMovies();
    }, []);

    const [dataMovies, setDataMovies] = useState([]);
    const handleGetDataAllMovies = () => {
        VideosData.getDataMovies().then(response => setDataMovies(response)).catch(error => console.log(error))
    }
    console.log(dataMovies);
    return (
        <div className={classes.Layout}>
            {dataMovies != null && (
                dataMovies.map((item, index) => (
                    <div key={index} className={classes.ItemGroup}>
                        <div className={classes.img}>
                            <img alt="img" src={item.image.url} className={classes.img2} width="250em" height="150em" />
                        </div>
                        <div className={classes.content}>
                            <div className={classes.MovieTitle}>{item.title} ({item.primaryTitle.year})</div>
                            <div className={classes.MovieDescription}>{item.description}</div>
                            <div className={classes.MovieType}>Content Type : {item.contentType}</div>
                            <div className={classes.MovieDuration}>Duration : {item.durationInSeconds} s</div>
                            <div className={classes.MovieLanguage}>Language : {item.audioLanguage}</div>
                        </div>
                    </div>
                ))
            )}
        </div>

    )
}

export default Videos;