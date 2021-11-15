import { useEffect, useState } from "react";
import useStyles from "./style";

import { PeopleData } from "../../data/PeopleData";

function People(props) {
    var classes = useStyles();
    useEffect(() => {
        handleGetDataPeople();
    }, []);
    const [dataPeople, setDataPeople] = useState([]);
    const handleGetDataPeople = () => {
        PeopleData.getDataPeople().then(response => setDataPeople(response)).catch(error => console.log(error))
    }
    console.log(dataPeople)
    return (
        <div className={classes.Layout}>
            {dataPeople != null && (
                dataPeople.map((item, index) => (
                    <div key={index} className={classes.ItemGroup}>
                        <div className={classes.rows}>
                            <div className={classes.Fullname}>{item.FIRST_NAME} {item.MIDDLE_NAME} {item.LAST_NAME}</div>
                            <div className={classes.title}>
                                <div className={classes.titleText}>Gender </div> 
                                <div>: {item.GENDER}</div>
                            </div>
                            <div className={classes.title}>
                                <div className={classes.titleText}>ID</div> 
                                <div>: {item.IDENTIFICATION}</div>
                            </div>
                            <div className={classes.title}>
                                <div className={classes.titleText}> Country </div>
                                <div>: {item.COUNTRY_SHORT}</div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>

    )
}

export default People;