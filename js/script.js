// Copyright (c) 2022 Mr. Coxall All rights reserved
//
// Created by: Sam Corbett
// Created on: Oct 2022
// This file contains the JS functions for index.html
/**
 * Do Rectangle Area and Perimeter math.
 */
function doMathClicked() {
  document.getElementById("calculate-area").innerHTML =
    "<p>The Area Of Rectangle is: " + 5 * 3 + "cm²</p>"
  document.getElementById("calculate-perimeter").innerHTML =
    "<p>The Perimeter Of Rectangle is: " + 2 * (3 + 5) + "cm</p>"
}
