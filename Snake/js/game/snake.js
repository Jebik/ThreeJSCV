import Head from './head.js'
import Body from './body.js'
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

    grow()
    {
        console.log("GROW")
        var body = new Body()
        body.setPosition(-1, -1)
        this.bodyList.push(body)        
        this.container.add(body.container)
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
        //REMOVE ALL
        this.bodyList.forEach(body => {
            this.container.remove(body.container)
            this.bodyList = this.bodyList.filter(function(b)
            { return b != body })
        });
        this.head.setPosition(12,6)
        this.dir = Dir.Right
        this.nextDir = Dir.Right
        this.x = this.head.x;
        this.y = this.head.y
    }

    initHead()
    {
        this.head = new Head()
        this.container.add(this.head.container)
        this.bodyList = []
        this.reset()
    }

    eat_himself()
    {
        return false;
    }
    
    reach()
    {        
        var last_x = this.x
        var last_y = this.y
        this.dir = this.nextDir
        this.x += this.dir.x
        this.y += this.dir.y
        this.head.setPosition(this.x,this.y)
        
        this.bodyList.forEach(body => {
            let curr_x = body.x;
            let curr_y = body.y;
            body.x = last_x;
            body.y = last_y;
            last_x = curr_x;
            last_y = curr_y;           
            body.setPosition(body.x,body.y)
        })
    }
}
export {Snake, Dir}