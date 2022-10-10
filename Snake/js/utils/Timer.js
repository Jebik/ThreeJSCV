import EventsHandler from './EventsHandler.js'

export default class Timer extends EventsHandler
{
    constructor()
    {
        super()

        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16
        this.targetDelta = 200

        this.tick = this.tick.bind(this)
        //this.tock = this.tock.bind(this)
        this.tick()
    }

    /**
     * Tick
     */
    tick()
    {
        this.ticker = window.requestAnimationFrame(this.tick)

        const current = Date.now()

        this.delta = current - this.current
        this.elapsed = current - this.start
        //console.log(this.elapsed.toString())
        /*if (this.elapsed > this.targetDelta)
        {
            console.log(this.targetDelta)
            //this.tock();
        }*/
        this.current = current

        this.trigger('tick')
    }

    /**
     * Tick
     */
    tock()
    {
        //this.start = Date.now()
        //this.trigger('tock')
    }

    /**
     * Stop
     */
    stop()
    {
        window.cancelAnimationFrame(this.ticker)
    }
}
