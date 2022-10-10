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

        this.tick = this.tick.bind(this)
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
        this.current = current

        this.trigger('tick')
    }

    /**
     * Stop
     */
    stop()
    {
        window.cancelAnimationFrame(this.ticker)
    }
}
