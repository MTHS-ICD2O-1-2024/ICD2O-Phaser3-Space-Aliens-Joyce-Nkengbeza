/*global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: April 2025
// This file contains the JS functions for index.html

import SplashScene from './splashScene.js'

//Our game scene
const splashScene = new SplashScene()

//*Game scene*/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)

//load scenes
//NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)

//start title
game.scene.start('splashScene')