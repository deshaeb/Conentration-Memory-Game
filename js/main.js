  /*----- constants -----*/
const frontTileSource = [
  {name: 'HartPlaza', img: '../concentrationImg/hartPlaza.jpg', matched: false},
  {name: 'Riverwalk', img: '../concentrationImg/riverWalk.jpg', matched: false},
  {name: 'Campus Martius', img: '../concentrationImg/campusMartius.jpg', matched: false},
  {name: 'Comerica Park', img: '../concentrationImg/comericaPark.jpg', matched: false},
  {name: 'LCA', img: '../concentrationImg/lca.jpg', matched: false},
  {name: 'Ford Field', img: '../concentrationImg/fordField.jpg', matched: false},
  {name: 'Casino Life', img: '../concentrationImg/motorCity.jpg', matched: false},
  {name: 'Rennaisance', img: '../concentrationImg/rennBuilding.jpg', matched: false},
];
const backTile = '../concentrationImg/tileBack.jpg';

  /*----- state variables -----*/
let board; //Array of 16 shuffled card objects
let tileSelected;
//let tiles;
//let firstTile;
let winner;
let loser;

  /*----- cached elements  -----*/
const tileImgEl = document.querySelectorAll('main > img');

  /*----- event listeners -----*/


  /*----- functions -----*/
  init (); //initialize all state then call render()

  function init() {
    board = getShuffledTiles();
    console.log(board);
  }
  
  function getShuffledTiles() {
    const tempTiles = [];
    const tiles = []
    for (let tile of frontTileSource) {
      tempTiles.push(tile, tile);
    }
    while (tempTiles.length) {
      let rndIdx = Math.floor(Math.random() * tempTiles.length);
      let tile = tempTiles.splice(rndIdx, 1)[0];
    
    console.log(tile);
  }

  return tiles;
  }
