import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import datatest from "../hooks/datatest.js";

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        datatest("https://jsonplaceholder.typicode.com/posts").then(data => setData(data));
    }, []);

    console.log("data", data);

    return (
        <div className={"flex bg-gray-700 w-[100vw] h-[100vh] p-[1vw] gap-[1vw]"}>
            <div className={"bg-yellow-500 w-[26vw] flex flex-wrap gap-2 p-[1vw] border-2 border-black"}>
                <div className={"perso flex flex-col justify-center items-center gap-3"}>
                    <h2 className={"text-sm md:text-xl font-bold text-center"}>GRIM</h2>
                    <div className={"border border-black w-[9vw] h-[15vh] bg-gray-600"}>
                        <img src={"/avatars/perso1.jpg"} alt={"tête du perso"} className={"h-full w-full object-cover"}/>
                    </div>
                    <Link to={"/perso"} type="button" className={"border border-black w-[9vw] h-[4vh] bg-yellow-500 text-center"}>Infos</Link>
                </div>
                <div className={"perso flex flex-col justify-center items-center gap-3"}>
                    <h2 className={"text-sm md:text-xl font-bold text-center"}>KADA</h2>
                    <div className={"border border-black w-[9vw] h-[15vh] bg-gray-600"}>
                        <img src={"/avatars/perso2.jpg"} alt={"tête du perso"} className={"h-full w-full object-cover"}/>
                    </div>
                    <Link to={"/perso"} type="button" className={"border border-black w-[9vw] h-[4vh] bg-yellow-500 text-center"}>Infos</Link>
                </div>
                <div className={"perso flex flex-col justify-center items-center gap-3"}>
                    <h2 className={"text-sm md:text-xl font-bold text-center"}>MIGOSH</h2>
                    <div className={"border border-black w-[9vw] h-[15vh] bg-gray-600"}>
                        <img src={"/avatars/perso3.jpg"} alt={"tête du perso"} className={"h-full w-full object-cover"}/>
                    </div>
                    <Link to={"/perso"} type="button" className={"border border-black w-[9vw] h-[4vh] bg-yellow-500 text-center"}>Infos</Link>
                </div>
                <div className={"perso flex flex-col justify-center items-center gap-3"}>
                    <h2 className={"text-sm md:text-xl font-bold text-center"}>CORDEAU</h2>
                    <div className={"border border-black w-[9vw] h-[15vh] bg-gray-600"}>
                        <img src={"/avatars/perso4.jpg"} alt={"tête du perso"} className={"h-full w-full object-cover"}/>
                    </div>
                    <Link to={"/perso"} type="button" className={"border border-black w-[9vw] h-[4vh] bg-yellow-500 text-center"}>Infos</Link>
                </div>
                <div className={"perso flex flex-col justify-center items-center gap-3"}>
                    <h2 className={"text-sm md:text-xl font-bold text-center"}>MALALA</h2>
                    <div className={"border border-black w-[9vw] h-[15vh] bg-gray-600"}>
                        <img src={"/avatars/perso5.jpg"} alt={"tête du perso"} className={"h-full w-full object-cover"}/>
                    </div>
                    <Link to={"/perso"} type="button" className={"border border-black w-[9vw] h-[4vh] bg-yellow-500 text-center"}>Infos</Link>
                </div>
            </div>
            <div className={"bg-pink-500 w-[72vw] relative border-2 border-black"}>
                <div className={"absolute right-5 top-5"}><button className={"border border-black w-[9vw] h-[9vh] bg-yellow-500 text-center p-1"}>Lancé de dés !</button></div>
                <img className={"w-full h-full"} src={"/images/maptest.jpeg"} alt={"image d'une carte au trésor"}/>
            </div>
        </div>
    );
}
export default Home;