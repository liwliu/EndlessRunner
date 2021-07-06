/* Endless Runner Project
// 
// Alien Invasion 
//
// Created by:
// Warren Liu
// Christorpher Lee
// John Sanli

// Completed on July 6th, 2021
// Summer 2021

// Creative Tilt:
// - Performs various sound effects upon reactions
// - Creates different effects whenever you get a high score or not.
// - Uses a local variable in main in order to track a high score per
// browser session
// - Randomly generates platforms and people on each platform to change each session
// - Music is very classic and sound effects match the style of the game being pixelated and simple
// - Style is fairly colorful to see and color scheme is great.
// - Alien being green shows the player's role and stands out from the rest of the background assets.
*/ 

// game configurations

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play, GameOver]
}

let menuConfig = {
    fontFamily: 'ShowGothic',
    fontSize: '36px',
    //backgroundColor: '#D3D3DE',
    color: '#3CD070',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 0
}

let game = new Phaser.Game(config);
let menuMusic;

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let totalScore;
let hiScore = 0;

let keyR;
let keyW, keyA, keyS, keyD;

let keySPACE;



