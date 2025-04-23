/*global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha ray
// Created on: April 2025
//This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Title Scene')
  }

  creat(data) {
  }

  update(time, delta) {
  }
}

export default TitleScene
