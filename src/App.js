import React from "react";
import Tile from "./components/Tile";

export default function App() {
  
  const [tiles, setTiles] = React.useState([])
  const [winConditionMet, setWinConditionMet] = React.useState(false)

  function allNewDice() {
    let diceArr = [];
    for (let i = 0; i < 10; i++) {
      let rollVal = Math.floor(Math.random() * 6) + 1;
      diceArr.push({id: i, value: rollVal, isLocked: false})
    }
    console.log(diceArr)
    return diceArr;
  }

  React.useEffect(() => {
    setTiles(() => allNewDice())
  }, [])

  const createTiles = tiles.map(
    tile => {return <Tile key={tile.id} value={tile.value} isLocked={tile.isLocked} onClick={handleTileClick(tile)} />
    }
  )

    function handleTileClick(tile) {return () => {
      setTiles(prevTiles => prevTiles.map(
        prevTile => prevTile.id === tile.id ? 
        {...prevTile, isLocked: !prevTile.isLocked} :
        prevTile
      ))
      console.log(tiles[tile.id].isLocked)
      }
    }

    function roll() {

      setTiles(prevTiles => prevTiles.map(
        prevTile => prevTile.isLocked ?
          prevTile :
          {...prevTile, value: (Math.floor(Math.random() * 6) + 1)}
        )
      )
    }

    function playAgain() {
      setTiles(() => allNewDice())
    }

    React.useEffect(() => {
      setWinConditionMet(tiles.every( tile => (tile.value === tiles[0].value) && (tile.isLocked === true) ))
    },[tiles])

  return (

    <main>
      {winConditionMet && <div className="congratz">YOU WIN</div>}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="tile--container">
        {createTiles}
      </div>
      <button onClick={winConditionMet? playAgain : roll}>{winConditionMet? "Play Again" : "Roll!"}</button>
    </main>
  )
}