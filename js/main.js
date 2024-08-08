  /*----- constants -----*/
const frontTileSource = [
  {img: '../concentrationImg/hartPlaza.jpg', matched: false},
  {img: '../concentrationImg/riverWalk.jpg', matched: false},
  {img: '../concentrationImg/campusMartius.jpg', matched: false},
  {img: '../concentrationImg/comericaPark.jpg', matched: false},
  {img: '../concentrationImg/lca.jpg', matched: false},
  {img: '../concentrationImg/fordField.jpg', matched: false},
  {img: '../concentrationImg/motorCity.jpg', matched: false},
  {img: '../concentrationImg/rennBuilding.jpg', matched: false},
];
const backTile = 'concentrationImg/tileBack.jpg';

  /*----- state variables -----*/
let tiles; //Array of 16 shuffled card objects
let tileSelected; //first tile clicked (tile object) or null
let winner;
let loser;

  /*----- cached elements  -----*/
// const tileImgEl = document.querySelectorAll('section > img');

  /*----- event listeners -----*/
  document.querySelector('#board').addEventListener('click', handleChoice);

  /*----- functions -----*/
  init (); 
//initialize all state then call render()
  function init() {
    tiles = getShuffledTiles();
    tileSelected = null;
    render();
  }
  
  function render() {
    tiles.forEach(function(tile, idx) {
      const imgEl = document.getElementById(idx);
      const src = (tile.matched || tile === tileSelected) ? tile.img : backTile;
      console.log(imgEl)
      imgEl.src = src;
    });
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

  function handleChoice(event) {
    const tileIdx = parseInt(event.targer.id);
    console.log(cardIdx)
  }
