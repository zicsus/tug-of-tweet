'use strict';
import assetData from './assets.js';
import AssetLoader from './assetLoader.js';
import Vector from './vector.js';
import Sprite from './sprite.js';
import Empty from './empty.js';

let canvas = null;
let context = null;
let assets = null;
const state = {
    gameObjects: {}
};

AssetLoader.load(assetData, (loadedAssets) => 
{
    assets = loadedAssets;
    start();
})

function start()
{
    canvas = document.createElement("canvas");
    canvas.width = 1280;
    canvas.height = 720;
    canvas.style.width = `${canvas.width}px`;
    canvas.style.height = `${canvas.height}px`;
    context = canvas.getContext("2d");
    document.body.appendChild(canvas);

    state.gameObjects.field = new Empty(50, 50);
    state.gameObjects.arrowLeft = new Sprite(0, 0, assets.images.arrow);
    state.gameObjects.field.addChild(state.gameObjects.arrowLeft);

    gameLoop();

    window.addEventListener("resize", () => 
    {
        canvas.width = 1280;
        canvas.height = 720;
        canvas.style.width = `${canvas.width}px`;
        canvas.style.height = `${canvas.height}px`;
    });
}

function update()
{
    const field = state.gameObjects.field;
    field.transform(new Vector(field.position.x + 0.5, field.position.y));

    const arrowLeft = state.gameObjects.arrowLeft;
    arrowLeft.transform(new Vector(arrowLeft.position.x + 0.5, arrowLeft.position.y));
}

function render()
{
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0f0c29');
    gradient.addColorStop(0.5, '#302b63');
    gradient.addColorStop(1, '#24243e');

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (const [_, obj] of Object.entries(state.gameObjects)) obj.render(context);
}

function gameLoop()
{
    requestAnimationFrame(function()
    {
        // Clear screen
        context.clearRect(0, 0, canvas.width, canvas.height);
    
        update();
        render();
        
        gameLoop();
    });
}

