import Head from './head.js'

export const Dir = Object.freeze({
	Up: {x:0, y:0},
    Left: {x:0, y:0},
    Down: {x:0, y:0},
	Right: {x:0, y:0}});

export default class Snake
{
    constructor(data)
    {
        this.config = data.config
        this.container = data.container

        this.initHead()
    }

    reset()
    {
    }

    initHead()
    {
        this.head = new Head()
        this.container.add(this.head.container)
        this.head.setPosition(12,6)
        this.dir = Dir.Right
        this.x = this.head.x;
        this.y = this.head.y
    }

    eat_himself()
    {
        return false;
    }
    
    reach()
    {
        this.x += this.dir.x;
        this.y += this.dir.y;
        this.head.setPosition(this.x,this.y)
    }
}