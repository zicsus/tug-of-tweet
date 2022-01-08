'use strict';
import Vector from './vector.js';
import {getGlobalPosition} from './utils.js';
 
function Sprite(x, y, image, width, height, parent)
{
    this.parent = parent;
    this.image = image;
    this.scale = new Vector(width || this.image.width, height || this.image.height);
    this.position = new Vector(x, y);

    this.transform = (newPos) => 
    {
        this.position = new Vector(newPos.x, newPos.y);
    }

    this.render = (context) => 
    {
        const gp = getGlobalPosition(this.position, this.parent)
        const rx = gp.x - this.scale.x / 2;
        const ry = gp.y - this.scale.y / 2;
        context.drawImage(this.image, rx, ry, this.scale.x, this.scale.y);
    }
}

export default Sprite;