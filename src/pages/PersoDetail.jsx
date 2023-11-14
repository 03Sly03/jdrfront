import { useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchData from "../hooks/fetchData.js";

function PersoDetail() {
    const location = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(`http://localhost:5118/api/characters/${location.state.id}`).then(data => setData(data));
    }, [location]);

    return (
        <div>
            <h1>Détail perso</h1>
            <h2>{data.id} - {data.name}</h2>
        </div>
    );
}

export default PersoDetail;