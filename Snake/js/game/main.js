
import Background from './bg.js'
import Head from './head.js'
import Snake from './snake.js'

export default class
{
    constructor(data)
    {        
        // Options
        this.config = data.config
        this.timer = data.timer
        this.sizes = data.sizes
        this.camera = data.camera
        this.renderer = data.renderer

        // Set up 
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false

        // this.setAxes()
        this.initControls()
        this.initBackground()
        //this.initSnake()
        this.initHead()
    }

    initSnake()
    {
        this.snake = new Snake({
            config: this.config,
            timer: this.timer,
            sizes: this.sizes
        })
    }

    initControls()
    {
        /*
        this.controls = new Controls({
            config: this.config,
            sizes: this.sizes,
            time: this.time,
            camera: this.camera,
            sounds: this.sounds
        })
        */
    }

    initBackground()
    {
        this.bg = new Background()
        this.container.add(this.bg.container)
    }

    initHead()
    {
        this.head = new Head()
        console.log(this.head.container.position)
        this.container.add(this.head.container)
        this.head.setPosition(2,2)
    }
}