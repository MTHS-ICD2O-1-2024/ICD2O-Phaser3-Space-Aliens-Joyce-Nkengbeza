/*global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved

//

// Created by: Joyce Nkengbeza

// Created on: April 2025

//This is the Game Scene

class GameScene extends Phaser.Scene {
  /**
 
   * This method is the construtor
 
   */

  constructor() {
    super({ key: "gameScene" })

    this.background = null

    this.ship = null
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Game Scene")

    //images

    this.load.image("starBackground", "./assets/starBackground.png")

    this.load.image("ship", "./assets/spaceShip.png")
  }

  create(data) {
    this.background = this.add.image(0, 0, "starBackground").setScale(2.0)

    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
  }

  update(time, delta) {}
}

export default GameScene
