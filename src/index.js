'use strict';
//const express = require('express');
const http = require('http');

document.addEventListener('DOMContentLoaded', () => {
    // Canvas initialize
    const canvasElem = document.getElementById('main-canvas');
    const canvasContext = canvasElem.getContext('2d');
    canvasContext.font = '18px serif';
  
    // Canvas Clear
    canvasContext.fillStyle = 'black';
    canvasContext.clearRect(0, 0, canvasElem.width, canvasElem.height);
    canvasContext.fillRect(0, 0, canvasElem.width, canvasElem.height);
  
    // Render
    canvasContext.fillStyle = 'white';
    canvasContext.fillText('Hello, World!', 4, 20);
  });