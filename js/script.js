// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html
function RandomNumber() {
  const mark = document.getElementById("options").value
  //generate any number
  const randomNumber = Math.floor(Math.random() * 6) + 1
  // returns a random integer from 1 to 6 into variable "randomNumber"
  if (mark == 1) {
    document.getElementById("TheAnswer").innerHTML = "Random Number!: " + randomNumber
  }else {
    document.getElementById("TheAnswer").innerHTML = "Random Number!: -" + randomNumber //memory for str = 1byte memory for int = 4byte
  }
} 