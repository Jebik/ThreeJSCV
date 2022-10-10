import Head from './head.js'
import Keyboard from './keyboard.js'

const Dir = Object.freeze({
	Up: {x:0, y:-1},
    Left: {x:-1, y:0},
    Down: {x:0, y:1},
	Right: {x:1, y:0}});

class Snake
{
    constructor(data)
    {
        this.config = data.config
        this.container = data.container
        this.keyboard = new Keyboard() 

        this.onDirKeyDown = (_event) =>
        {
            this.tryAdd(_event)
        }
        this.keyboard.on('dir', this.onDirKeyDown)
        this.initHead()
    }


    tryAdd(dir)
    {
        console.log(dir)
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
export {Snake, Dir}