import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchData from "../hooks/fetchData.js";
import RollDice from "../fighting/RollDice.js";
import Fight from "../fighting/Fight.js";

let enemies = [
    {
        id: "enemy-1",
        name: "Glorck",
        life: 25,
        agility: 10,
        force: 8,
        attack: 9,
    },{
        id: "enemy-2",
        name: "Mouche",
        life: 25,
        agility: 10,
        force: 10,
        attack: 10,
    }
]

const roundArray = [
    {
        id: "enemy-1",
        init: 3,
    },
    {
        id: "enemy-2",
        init: 5,
    },
    {
        id: "1",
        init: 6,
    },
    {
        id: "2",
        init: 7,
    },
    {
        id: "3",
        init: 2,
    },
    {
        id: "4",
        init: 3,
    },
    {
        id: "5",
        init: 4,
    },
]

let sorted = roundArray.sort((a, b) => b.init - a.init);
console.log("sorted", sorted);

function Home() {
    const [data, setData] = useState([]);
    const [diceResult, setDiceResult] = useState(0);
    // const [diceDamage, setDiceDamage] = useState(0);
    // const [playerDamage, setPlayerDamage] = useState(0);
    // const [timeDisplay, setTimeDisplay] = useState(0);
    const [selectedEnemy, setSelectedEnemy] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState([]);

    useEffect(() => {
            fetchData("http://localhost:5118/api/characters").then(data => setData(data));
    }, []);

    // const fight = (enemy, player) => {
    //     let dice = (Math.ceil(Math.random() * 12));
    //     setDiceResult(dice);
    //     console.log("FIGHT !",dice, enemy[0], player);
    //     let thePlayer = data.filter(p => p.id === player)[0];
    //
    //     let theEnemy = enemies.filter(e => e.id === enemy[0]);
    //     let myEnemy = theEnemy[0];
    //     console.log("les characters", thePlayer, myEnemy);
    //     console.log("tout", dice, thePlayer.force, myEnemy.force);
    //     console.log("vie enemie", myEnemy.life);
    //     if (thePlayer.force + dice > myEnemy.force){
    //         console.log("player hits !");
    //         let damage = Math.ceil(Math.random() * 12);
    //         setDiceDamage(damage);
    //         enemies.filter(e => e.id === enemy[0])[0].life = myEnemy.life - damage;
    //         if (enemies.filter(e => e.id === enemy[0])[0].life <= 0){
    //             console.log("Enemy is dead !");
    //             document.getElementById(enemy[0]).style.display = 'none';
    //             setTimeout(() => document.getElementById('deathDisplay').style.display = 'block', 200);
    //             setTimeout(() => document.getElementById('deathDisplay').style.display = 'none', 5000);
    //             setSelectedEnemy([]);
    //         }
    //     } else {
    //         console.log("player missed !");
    //         setDiceDamage(0);
    //     }
    //
    //     console.log("fight enemy", myEnemy.life);
    // }

    // const rollDice = () => {
    //
    //         // setDiceResult(Math.ceil(Math.random() * 12));
    //         if (document.getElementById('diceDisplay').style.display === 'none' || document.getElementById('diceDisplay').style.display === '') {
    //             document.getElementById('diceDisplay').style.display = 'block';
    //             setTimeDisplay(setTimeout(() => document.getElementById('diceDisplay').style.display = 'none', 5000));
    //             fight(selectedEnemy, +selectedPlayer);
    //         } else {
    //             clearTimeout(timeDisplay);
    //             document.getElementById('diceDisplay').style.display = 'none';
    //             setTimeout(() => document.getElementById('diceDisplay').style.display = 'block', 200);
    //             setTimeDisplay(setTimeout(() => document.getElementById('diceDisplay').style.display = 'none', 5000));
    //             fight(selectedEnemy, +selectedPlayer);
    //         }
    //     } else {
    //         console.log("pas d'énemie et de player selected");
    //         document.getElementById('noSelectedCharacters').style.display = 'block';
    //         setTimeout(() => document.getElementById('noSelectedCharacters').style.display = 'none', 2000);
    //     }
    // }


    const selectCharacter = (e) => {
        e.preventDefault();
        if (e.target.name === "player") {
            let thePlayer = data.filter(p => p.id === +e.target.id);
            if (selectedPlayer.length === 0) {
                setSelectedPlayer(thePlayer);
                document.getElementById(e.target.id).style.border = 'solid 5px blue';
                document.getElementById(`player-${e.target.id}`).style.border = 'solid 5px blue';
            } else {
                // if (selectedEnemy.length !== 0) {
                //     selectedEnemy.map((enemy) => (
                //         document.getElementById(enemy.id).style.border = 'solid 5px black'
                //     ))
                //     setSelectedEnemy([]);
                // }
                if (selectedPlayer.filter(player => player.id === +e.target.id).length !== 0) {
                    document.getElementById(e.target.id).style.border = 'solid 5px black';
                    document.getElementById(`player-${e.target.id}`).style.border = 'solid 1px black';
                    setSelectedPlayer([]);
                } else {
                    selectedPlayer.map((player) => {
                        document.getElementById(player.id).style.border = 'solid 5px black';
                        document.getElementById(`player-${player.id}`).style.border = 'solid 1px black';
                    });
                    document.getElementById(e.target.id).style.border = 'solid 5px blue';
                    document.getElementById(`player-${e.target.id}`).style.border = 'solid 5px blue';
                    setSelectedPlayer(thePlayer);
                }
            }
        } else {
            let theEnemy = enemies.filter(enemy => enemy.id === e.target.id);
            if (selectedEnemy.length === 0) {
                let theEnemy = enemies.filter(enemy => enemy.id === e.target.id);
                setSelectedEnemy(theEnemy);
                document.getElementById(e.target.id).style.border = 'solid 5px yellow';
            } else {
                if (selectedEnemy.filter(enemy => enemy.id === e.target.id).length !== 0) {
                    document.getElementById(e.target.id).style.border = 'solid 5px black';
                    setSelectedEnemy(selectedEnemy.filter(enemy => enemy.id !== e.target.id));
                } else {
                    selectedEnemy.map((enemy) => (
                        document.getElementById(enemy.id).style.border = 'solid 5px black'
                    ))
                    document.getElementById(e.target.id).style.border = 'solid 5px yellow';
                    let theEnemy = enemies.filter(enemy => enemy.id === e.target.id);
                    setSelectedEnemy(theEnemy);
                }
            }
        }
    }

    const initiateAttack = (dice, multiplier, selectedPlayer, selectedEnemy ) => {
        console.log("selectedPlayer & Enemy", selectedPlayer, selectedEnemy);
        if (selectedEnemy.length !== 0 && selectedPlayer.length !== 0) {
            let rolledDice = RollDice(dice, multiplier);
            setDiceResult(rolledDice);
            Fight(rolledDice, selectedPlayer, selectedEnemy);
        } else {
            console.log("pas d'énemie et de player selected");
            document.getElementById('noSelectedCharacters').style.display = 'block';
            setTimeout(() => document.getElementById('noSelectedCharacters').style.display = 'none', 2000);
        }
    }

    return (
        <div className={"flex bg-gray-700 w-[100vw] h-[100vh] p-[1vw] gap-[1vw]"}>
            <div className={"bg-yellow-500 w-[26vw] flex flex-wrap gap-2 p-[1vw] border-2 border-black"}>
                {data && data.map(character => (
                    <div id={`player-${character.id}`} key={character.id} className={"perso flex flex-col justify-center items-center gap-3"}>
                        <h2 className={"text-sm md:text-xl font-bold text-center"}>{character.name.toUpperCase()}</h2>
                        <div className={"border border-black w-[9vw] h-[15vh] bg-gray-600"}>
                            <img src={`${character.image}`} alt={"tête du perso"} className={"h-full w-full object-cover"}/>
                        </div>
                        <Link state={{ id: character.id }} to={`/perso/${character.id}`} type="button" className={"border border-black w-[9vw] h-[4vh] bg-yellow-500 text-center"}>Infos</Link>
                    </div>
                ))}
            </div>
            <div className={"bg-pink-500 w-[72vw] relative border-2 border-black"}>
                <div className={"absolute right-5 top-5"}><button onClick={() => initiateAttack(6, 2, selectedPlayer, selectedEnemy)} className={"border border-black w-[9vw] h-[9vh] bg-yellow-500 text-center p-1"}>Lancé de dés !</button></div>
                <p id={"noSelectedCharacters"} className={"absolute bg-white border-black rounded-xl p-3 top-5 left-0 right-0 text-center mx-[20vw] hidden"}>Veuillez selectionner un joueur et son adversaire !</p>
                <p id={"noSelectedPlayer"} className={"absolute bg-white border-black rounded-xl p-3 top-5 left-0 right-0 text-center mx-[20vw] hidden"}>Veuillez d&apos;abord sélectionner le joueur qui va attaquer !</p>
                <img id={`${enemies[0].id}`} onClick={(e) => selectCharacter(e)} className={"enemy h-16 w-16 bg-red-500 text-center font-bold text-[0.7rem] leading-tight tracking-wider absolute p-3 border-4 border-black rounded-[50px] top-[19vh] left-[22vw]"} alt={`${enemies[0].name.toUpperCase()}`} />
                <img id={`${enemies[1].id}`} onClick={(e) => selectCharacter(e)} className={"enemy h-16 w-16 bg-red-500 text-center font-bold text-[0.7rem] leading-tight tracking-wider absolute p-3 border-4 border-black rounded-[50px] top-[19vh] left-[26vw]"} alt={`${enemies[1].name.toUpperCase()}`} />
                <img id={"1"} onClick={(e) => selectCharacter(e)} name={"player"} className={"player h-16 w-16 bg-gray-200 text-center font-bold text-[0.7rem] leading-tight tracking-wider absolute p-3 border-4 border-black rounded-[50px] top-[19vh] left-[30vw]"} alt={"GRIM"}/>
                <img id={"2"} onClick={(e) => selectCharacter(e)} name={"player"} className={"player h-16 w-16 bg-gray-200 text-center font-bold text-[0.7rem] leading-tight tracking-wider absolute p-3 border-4 border-black rounded-[50px] top-[10vh] left-[25vw]"} alt={"KADA"}/>
                <img id={"3"} onClick={(e) => selectCharacter(e)} name={"player"} className={"player h-16 w-16 bg-gray-200 text-center font-bold text-[0.7rem] leading-tight tracking-wider absolute p-3 border-4 border-black rounded-[50px] top-[28vh] left-[25vw]"} alt={"MIGOSH"}/>
                <img id={"4"} onClick={(e) => selectCharacter(e)} name={"player"} className={"player h-16 w-16 bg-gray-200 text-center font-bold text-[0.7rem] leading-tight tracking-wider absolute p-3 border-4 border-black rounded-[50px] top-[28vh] left-[30vw]"} alt={"CORDEAU"}/>
                <img id={"5"} onClick={(e) => selectCharacter(e)} name={"player"} className={"player h-16 w-16 bg-gray-200 text-center font-bold text-[0.7rem] leading-tight tracking-wider absolute p-3 border-4 border-black rounded-[50px] top-[19vh] left-[18vw]"} alt={"MALALA"}/>
                <img className={"w-full h-full"} src={"/images/maptest.jpeg"} alt={"image d'une carte au trésor"}/>
                {/*<div className={"absolute bottom-5 left-0 right-0 flex flex-col gap-2"}>*/}
                {/*    <p id={"diceDisplay"} className={"bg-white border-black rounded-xl p-3 text-center mx-[10vw] hidden"}>Vous avez fait {diceResult} ! et infligé {diceDamage} points de dégats</p>*/}
                {/*    <p id={"diceDisplayFail"} className={"bg-white border-black rounded-xl p-3 text-center mx-[10vw] hidden"}>Vous avez fait {diceResult} et manqué votre coup ! et avez subi {diceDamage} point de dégâts !</p>*/}
                {/*    <p id={"deathDisplay"} className={"bg-white border-black rounded-xl p-3 text-center mx-[10vw] hidden"}>L&apos;énemie est mort !</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
export default Home;