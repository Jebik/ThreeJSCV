import EventsHandler from './EventsHandler.js'

export default class WindowsSize extends EventsHandler
{
    /**
     * Constructor
     */
    constructor()
    {
        super()
        this.width = window.innerWidth
        this.height = window.innerHeight
        // Resize event
        this.resize = this.resize.bind(this)        
        window.onresize = this.resize;
        this.resize()
    }

    resize() {
        this.width = window.innerWidth
        this.height = window.innerHeight

        this.trigger('resize')
    }
}
