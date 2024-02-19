


export default function GameBoard({onSelecSquare, board}) {
  
//    const [gameBoard, setGameBoard] = useState(initialGameBoard);

//    function handleSelectSquare(rowIndex,colIndex) {
//         setGameBoard((prevGameBoard) => {
//             const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // esto copía un array nuevo con el cual se podrá manipular y no directamente el array original ya que por ser de referencia puede tener problemas al futuro
//             updateBoard[rowIndex][colIndex] = activePlayerSymbol;
//             return updateBoard;  
//         });

//         onSelecSquare();
//    }

    return  (<ol id="game-board">
        {board.map((row, rowIndex) => (
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => 
                (<li key={colIndex}>
                    <button onClick={() => onSelecSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
        </li>))}
            </ol>
        </li>))}
    </ol>);
}