/*global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved

//

// Created by: Joyce Nkengbeza

// Created on: April 2025

//This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Menu Scene")
  }

  creat(data) {}

  update(time, delta) {}
}

export default MenuScene
