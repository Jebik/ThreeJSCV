import EventsHandler from '../utils/EventsHandler.js'
import { Dir } from './snake.js'

export default class Keyboard extends EventsHandler
{
    constructor(_options)
    {
        super()
        this.dir = Dir.Right
        this.setKeyboard()
    }

    setKeyboard()
    {
        this.keyboard = {}
        this.keyboard.events = {}

        this.keyboard.events.keyDown = (_event) =>
        {
            switch(_event.key)
            {
                case 'ArrowUp':
                case 'z':
                case 'w':
                    this.trigger('dir', Dir.Up)
                    break

                case 'ArrowRight':
                case 'd':
                    this.trigger('dir', Dir.Right)
                    break

                case 'ArrowDown':
                case 's':
                    this.trigger('dir', Dir.Down)
                    break

                case 'ArrowLeft':
                case 'q':
                case 'a':
                    this.trigger('dir', Dir.Left)
                    break
            }
        }
        document.addEventListener('keydown', this.keyboard.events.keyDown)
    }
}
