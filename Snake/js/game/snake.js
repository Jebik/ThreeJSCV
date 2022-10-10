import Head from './head.js'
import Keyboard from './keyboard.js'

const Dir = Object.freeze({
	Down: {x:0, y:-1},
    Left: {x:-1, y:0},
    Up: {x:0, y:1},
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
        switch (dir)
        {
            case Dir.Left:
                if (this.dir == Dir.Up || this.dir == Dir.Down)
                {
                    this.nextDir = dir;
                }
                break;
            case Dir.Right:
                if (this.dir == Dir.Up || this.dir == Dir.Down)
                {
                    this.nextDir = dir;
                }
                break;
            case Dir.Up:
                if (this.dir == Dir.Left || this.dir == Dir.Right)
                {
                    this.nextDir = dir;
                }
                break;
            case Dir.Down:
                if (this.dir == Dir.Left || this.dir == Dir.Right)
                {
                    this.nextDir = dir;
                }
                break;
        }
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
        this.nextDir = Dir.Right
        this.x = this.head.x;
        this.y = this.head.y
        console.log("HEAD DRAW")
        console.log(this.container)
    }

    eat_himself()
    {
        return false;
    }
    
    reach()
    {
        this.dir = this.nextDir
        this.x += this.dir.x
        this.y += this.dir.y
        this.head.setPosition(this.x,this.y)
        console.log("NEW POSITION")
        console.log("x:" + this.x + " y:" + this.y)
    }
}
export {Snake, Dir}