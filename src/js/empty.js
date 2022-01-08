'use strict';
import Vector from './vector.js';

function Empty(x, y, parent)
{
    this.parent = parent;
    this.scale = new Vector(1, 1);
    this.position = new Vector(x, y);

    this.transform = (newPos) => this.position = new Vector(newPos.x, newPos.y);
    
    this.addChild = (obj) => 
    {
        obj.parent = this;
    }

    this.render = (_) => {}
}

export default Empty;