  /*----- constants -----*/
const frontTileSource = [
  {img: 'concentrationImg/hartPlaza.jpg', matched: false},
  {img: 'concentrationImg/riverWalk.jpg', matched: false},
  {img: 'concentrationImg/campusMartius.jpg', matched: false},
  {img: 'concentrationImg/comericaPark.jpg', matched: false},
  {img: 'concentrationImg/lca.jpg', matched: false},
  {img: 'concentrationImg/fordField.jpg', matched: false},
  {img: 'concentrationImg/motorCity.jpg', matched: false},
  {img: 'concentrationImg/rennBuilding.jpg', matched: false},
];
const backTile = 'concentrationImg/tileBack.jpg';

  /*----- state variables -----*/
let tiles; //Array of 16 shuffled card objects
let tileSelected; //first tile clicked (tile object) or null
let ignoreClicks;
let wrongTiles;
let count = 5;
let timer;
let winner;
let loser;

  /*----- cached elements  -----*/
const msgEl = document.querySelector('p');

  /*----- event listeners -----*/
  document.querySelector('#board').addEventListener('click', handleChoice);

  /*----- functions -----*/
  init (); 
//initialize all state then call render()
  function init() {
    tiles = getShuffledTiles();
    tileSelected = null;
    wrongTiles = 0;
    ignoreClicks = false;
    //count = 5;
    //timer = setInterval(handleChoice, 500);
    render();
  }
  
  function render() {
    tiles.forEach(function(tile, idx) {
      const imgEl = document.getElementById(idx);
      const src = (tile.matched || tile === tileSelected) ? tile.img : backTile;
      console.log(imgEl)
      imgEl.src = src;
    });
    msgEl.innerHTML = `Wrong: ${wrongTiles}`;
  }

  function getShuffledTiles() {
    let tempTiles = [];
    let tiles = []
    for (let tile of frontTileSource) {
      tempTiles.push({...tile}, {...tile});
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
    const tile = tiles[tileIdx]
    console.log(tile)
    
    if (tileSelected) {
      clearInterval(timer)
      if(tileSelected.img === tile.img)     {   //correct match
        tileSelected.matched = tile.matched = true;
      } else {
        wrongTiles++;
      }
      //clearInterval(timer)
      tileSelected = null
    } else {
      console.log(count);
      tileSelected = tile;
      timer = setInterval(() => {
        count--;
        console.log(count)
        if (count === 0 ) {
          //wrongTiles++
          tileSelected = null
          count = 5;
          render()
          clearInterval(timer) 
        // handleChoice(event)
      } 
      }, 1000);
    }
    render();
  }


  // if (isNaN(tileIdx) || winner || )
