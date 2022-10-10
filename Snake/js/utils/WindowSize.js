import EventsHandler from './EventsHandler.js'

export default class WindowsSize extends EventsHandler
{
    /**
     * Constructor
     */
    constructor()
    {
        super()
        /*
            For Some Reason innerWidth is fucked a little 
            bit to big here
            So we create a fake object to get thre real size
        */

        // Resize event
        this.resize = this.resize.bind(this)
        window.addEventListener('resize', this.resize)
        this.resize()
    }

    resize() {
        this.width = window.innerWidth
        this.height = window.innerHeight

        this.trigger('resize')
        console.log("Width: " + this.width + " Height: " + this.height)
    }
}
