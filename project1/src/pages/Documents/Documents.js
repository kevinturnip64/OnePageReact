import { useEffect, useState } from "react";
import useStyles from "./style";

import { DocumentsData } from "../../data/DocumentsConnections";
import { Link } from "react-router-dom";

function Documents(props) {
    var classes = useStyles();
    useEffect(() => {
        handleGetDataPeople();
    }, []);
    const [dataDocuments, setDataDocuments] = useState([]);
    const handleGetDataPeople = () => {
        DocumentsData.getDataDocuments()
            .then(response => {
                setDataDocuments(response.data)
            }).catch(error => console.log(error))
    }
    console.log(dataDocuments)
  
    return (
        <div className={classes.Layout}>
            {dataDocuments != null && (
                dataDocuments.map((item, index) => (
                    <div key={index} className={classes.ItemGroup}>
                        <div className={classes.rows}>
                            <div className={classes.Fullname}>{item.Header}</div>
                            {
                                item.Content.map(elem => (
                                    <div>
                                        <a href={elem.url} target='_blank' style={{fontSize:'.8vw'}}>{elem.title}</a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Documents;