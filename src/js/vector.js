'use strict';

function Vector(x, y)
{
    this.x = x;
    this.y = y;

    this.equals = (vec) =>
    {
        return ((this.x == vec.x) && (this.y == vec.y));
    }

    this.add = (vec) =>
    {
        this.x += vec.x;
        this.y += vec.y;
        return this
    }
		
    this.subtract = (vec) =>
    {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    this.multiply = (vec) =>
    {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    }

    this.scale = (value) =>
    {
        this.x *= value;
        this.y *= value;
        return this;
    }
		
    this.distance = (vec) =>
    {
        let dx = this.x - vec.x;
        let dy = this.y - vec.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
		
    this.length = () => Math.sqrt(this.x * this.x + this.y * this.y);

    this.normalize = () =>
    {
        let length = this.length();
        this.x /= length;
        this.y /= length;
        this.z /= length;
    }
}

export default Vector;
		