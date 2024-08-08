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
let tiles; //Array of 16 shuffled card objects
let tileSelected1; //first tile clicked (tile object) or null
let tileSelected2;
let ignoreClicks;
let wrongTiles;
let matchesMade;
let count = 5;
let timer;
let winner;
let loser;

/*----- cached elements  -----*/
const msgEl = document.querySelector('#wrongGuess');
///const displayTmr = document.querySelector('#timer');

/*----- event listeners -----*/
document.querySelector('#board').addEventListener('click', handleChoice);

/*----- functions -----*/
init();
//initialize all state then call render()
function init() {
  tiles = getShuffledTiles();
  tileSelected1 = null;
  tileSelected2 = null;
  wrongTiles = 0;
  ignoreClicks = false;
  //count = 5;
  //timer = setInterval(handleChoice, 500);

  render();
}

function render() {
  // if (tileSelected1) {
  //   timer = setInterval(startTimer, 1000)
  // }
  tiles.forEach(function (tile, idx) {
    const imgEl = document.getElementById(idx);
    const src = (tile.matched || tile === tileSelected1 || tile === tileSelected2) ? tile.img : backTile;
    //console.log(imgEl)
    imgEl.src = src;
  });
  msgEl.innerHTML = `Wrong: ${wrongTiles}`;
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

//Update all impacted state, then call render ()
function handleChoice(event) {
  const tileIdx = parseInt(event.target.id);
  if (isNaN(tileIdx) || ignoreClicks) return;
  if (tileSelected1 && tileSelected2) return;
  const tile = tiles[tileIdx]
  //clearInterval(timer)
  console.log(tileSelected1)
  console.log(tileSelected2)
  if (tileSelected1 && !tileSelected2) {
    console.log('tile 1 true');
    tileSelected2 = tile
    render()
    if (tileSelected1.img === tileSelected2.img) {
      tileSelected1.matched = tileSelected2.matched = true;
      tileSelected1 = null;
      tileSelected2 = null;

  } else {
    tileSelected1 = null;
    tileSelected2 = null;
    wrongTiles++;
    setTimeout(() => {
      render()

    }, 2000)}
  } else {
    tileSelected1 = tile
    render()
  }
}

// function checkWinner() {
//   if wrong
//if wrong guess === 8 , set loser = true;
//if matches ===8, set winner = true
// };

// function startTimer() {
//   count--;
//   console.log(count)
//   if (count === 0) {
//     //wrongTiles++
//     count = 5;
//     //render()
//     clearInterval(timer)
//     tileSelected1 = null
// handleChoice(event)
//   } 
// };

function startTimer(callback, minutes, seconds) {
  const interval = (minutes * 60 + seconds) * 1000; // Convert to milliseconds
  return setInterval(callback, interval);
}
startTimer(() => {

}, 3, 59)


// if (isNaN(tileIdx) || winner || )
