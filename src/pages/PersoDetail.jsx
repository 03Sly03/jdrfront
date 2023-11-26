import { useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchData from "../hooks/fetchData.js";

function PersoDetail() {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [classData, setClassData] = useState([]);

    useEffect(() => {
        fetchData(`http://localhost:5118/api/characters/${location.state.id}`).then(data => setData(data));
    }, [location]);
    const {life, attack, agility, force, stamina, chance, level, classId} = data;
    useEffect(() => {
        fetchData(`http://localhost:5118/api/characterClasses/${classId}`).then(data => setClassData(data))
    }, [classId]);



    return (
        <div>
            {data.length !== 0 ?
                (
                    <div className={"flex justify-center gap-80 m-24"}>
                        <div className={"flex flex-col items-center"}>
                            <h2 className={"text-3xl font-extrabold"}>{data.name.toUpperCase()}</h2>
                            <img src={`${data.image}`} alt={"photo du perso"}/>
                            <p className={"m-5"}>&quot;{data.description}&quot;</p>
                            <h3>Point de vie: {life}</h3>
                            <h3>Facteur d&apos;assaut: {attack}</h3>
                            <h3>Agilité: {agility}</h3>
                            <h3>Force: {force}</h3>
                            <h3>Endurance: {stamina}</h3>
                            <h3>Chance: {chance}</h3>
                            <h3>Niveau: {level}</h3>
                        </div>
                        <div className={"flex flex-col items-center"}>
                            <h2 className={"text-2xl font-extrabold mb-12"}>{classData.name}</h2>
                            <h3>{classData.description}</h3>
                        </div>
                    </div>
                )
            : <p>Chargement...</p>}
        </div>
    );
}

export default PersoDetail;