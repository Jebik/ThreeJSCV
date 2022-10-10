import Head from './head.js'
import Timer from '../utils/Timer.js'

export default class Snake
{
    constructor(data)
    {
        this.config = data.config
        this.timer = data.timer
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
        this.x = this.head.x;
        this.y = this.head.y
    }

    eat_himself()
    {
        return false;
    }

    start()
    {
        //Render Event
        this.timer.on('reach', () =>
        {
            this.x = this.head.x
            this.y = this.head.y
            this.head.setPosition(this.x,this.y)
        })
    }
    
    reach()
    {
        //DO MOVE
    }
}