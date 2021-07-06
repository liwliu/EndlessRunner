// Endless Runner Project
//
// Created by:
// Warren Liu
// Christorpher Lee
// John Sanli
// 
// Summer 2021

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

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let totalScore;
let hiScore = 0;

let keyR;
let keyW, keyA, keyS, keyD;

let keySPACE;



