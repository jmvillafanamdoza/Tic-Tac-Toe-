import { useState } from "react"

export default function Player({initialName,symbol, isActive, onChangeName}) {
    const [ playerName , setPlayerName] = useState(initialName);
    const [ isEditing , setIsEditing ] = useState(false);

    function handleEditClick () {
        setIsEditing((newisEditing) => !newisEditing); 

        if(isEditing){
            onChangeName(symbol, playerName);    
        }
    }

    function handleChange (event) {
        console.log(event)
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let playerSymbol = <span className="player-symbol">{symbol}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>;
        btnCaption = 'Save';
    }

    
        
    

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player"> 
               {editablePlayerName}
               {playerSymbol}
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
          </li>
    )
}