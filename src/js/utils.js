'use strict';
import Vector from './vector.js';

function getGlobalPosition(position, parent)
{
    let gx = position.x;
    let gy = position.y;
    
    if (parent)
    {
        const offset = getGlobalPosition(parent.position, parent.parent);
        gx += offset.x;
        gy += offset.y;
    } 

    return new Vector(gx, gy);
}

export { getGlobalPosition };