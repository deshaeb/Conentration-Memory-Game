/*----- constants -----*/
const frontTileSource = [
  { img: 'concentrationImg/hartPlaza.jpg', matched: false },
  { img: 'concentrationImg/riverWalk.jpg', matched: false },
  { img: 'concentrationImg/campusMartius.jpg', matched: false },
  { img: 'concentrationImg/comericaPark.jpg', matched: false },
  { img: 'concentrationImg/lca.jpg', matched: false },
  { img: 'concentrationImg/fordField.jpg', matched: false },
  { img: 'concentrationImg/motorCity.jpg', matched: false },
  { img: 'concentrationImg/rennBuilding.jpg', matched: false },
];
const backTile = 'concentrationImg/tileBack.jpg';

/*----- state variables -----*/
let tiles; 
let tileSelected1; 
let tileSelected2;
let ignoreClicks;
let wrongTiles;
let matchesMade;
let timer;
let winner;
let loser;

/*----- cached elements  -----*/
const msgGuess = document.querySelector('#wrongGuess');
const msgMatch = document.querySelector('#matchesMade');
const msgEl = document.querySelector('#displayMsg');
const msgInstr = document.querySelector('#displayMsg');

/*----- event listeners -----*/
document.querySelector('#board').addEventListener('click', handleChoice);
document.querySelector('#play').addEventListener('click', init);
document.querySelector('#shuffle').addEventListener('click', init);

/*----- functions -----*/
init();
function init() {
  tiles = getShuffledTiles();
  tileSelected1 = null;
  tileSelected2 = null;
  wrongTiles = 0;
  matchesMade = 0;
  ignoreClicks = false;
  winner = null;
  loser = null;
  msgInstr.innerHTML = `Instructions:<br>
        Click 'Play!' to begin. <br>
        Select 2 tiles per turn! <br>
        Collect 8 matches to win! <br>
        8 wrong picks = GAME OVER! <br>
        Click 'Shuffle' to restart the game. <br>
        Good Luck!`;
  render();
}

function render() {
  tiles.forEach(function (tile, idx) {
    const imgEl = document.getElementById(idx);
    const src = (tile.matched || tile === tileSelected1 || tile === tileSelected2) ? tile.img : backTile;
    imgEl.src = src;
  });
  msgGuess.innerHTML = `Wrong: ${wrongTiles}/8`;
  msgMatch.innerHTML = `Matches: ${matchesMade}/8`;
  checkWinner()
}

function getShuffledTiles() {
  let tempTiles = [];
  let tiles = []
  for (let tile of frontTileSource) {
    tempTiles.push({ ...tile }, { ...tile });
  }
  while (tempTiles.length) {
    let rndIdx = Math.floor(Math.random() * tempTiles.length);
    let tile = tempTiles.splice(rndIdx, 1)[0];
    tiles.push(tile);
  }
  return tiles;
}

function handleChoice(event) {
  const tileIdx = parseInt(event.target.id);
  if (isNaN(tileIdx) || ignoreClicks) return;
  if (tileSelected1 && tileSelected2) return;
  const tile = tiles[tileIdx]
  console.log(tileSelected1)
  console.log(tileSelected2)
  if (tileSelected1 && !tileSelected2) {
    tileSelected2 = tile;
    render()
    if (tileSelected1.img === tileSelected2.img) {
      tileSelected1.matched = tileSelected2.matched = true;
      matchesMade++;
      tileSelected1 = null;
      tileSelected2 = null;
      render()
    } else {
      tileSelected1 = null;
      tileSelected2 = null;
      wrongTiles++;
      msgEl.innerHTML = `Wrong! Try Again!`
      setTimeout(() => {
        render()
      }, 2000)
    }
  } else {
    tileSelected1 = tile
    msgEl.innerHTML = ``;
    render()
  }
}

function checkWinner() {
  if (matchesMade === 8) {
    winner = true;
    msgEl.innerHTML = `WINNER!`;
    ignoreClicks = true;
  } else if (wrongTiles === 8) {
    loser = true;
    msgEl.innerHTML = `YOU LOSE!`;
    ignoreClicks = true;
  } else {
    return;
  }
};
