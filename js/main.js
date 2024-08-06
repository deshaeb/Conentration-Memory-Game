  /*----- constants -----*/
const frontTileSource = [
  {name: 'HartPlaza', img: 'https://imgur.com/a/U0cpQxs', matched: false},
  {name: 'Riverwalk', img: 'https://imgur.com/94ZnTIq', matched: false},
  {name: 'Campus Martius', img: 'https://imgur.com/3CBSrIG', matched: false},
  {name: 'Comerica Park', img: 'https://imgur.com/JELf4Mo', matched: false},
  {name: 'LCA', img: 'https://imgur.com/XbLCDgm', matched: false},
  {name: 'Ford Field', img: 'https://imgur.com/E4t6vfV', matched: false},
  {name: 'Casino Life', img: 'https://imgur.com/GVQjbwe', matched: false},
  {name: 'Rennaisance', img: 'https://imgur.com/wJsEKRp', matched: false},
];
const backTile = 'https://imgur.com/8vWmfMA';

  /*----- state variables -----*/
let board; //Array of 16 shuffled card objects
let cardSelected;
//let cards;
//let firstCard;
let winner;
let loser;

  /*----- cached elements  -----*/
const tileImgEl = document.querySelectorAll('main > img');

  /*----- event listeners -----*/


  /*----- functions -----*/
  init () //initialize all state then call render()

  function init() {
    board = getShuffledTiles();
    console.log(board);
  }
  
  function getShuffledTiles(){
    const tempTiles = [];
    const tiles = []
  }