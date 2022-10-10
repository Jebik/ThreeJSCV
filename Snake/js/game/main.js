
import Floor from './floor.js'

export default class
{
    constructor(data)
    {        
        // Options
        this.config = data.config
        this.time = data.time
        this.sizes = data.sizes
        this.camera = data.camera
        this.renderer = data.renderer

        // Set up
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false

        // this.setAxes()
        this.initControls()
        this.initFloor()
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

    initFloor()
    {
        this.floor = new Floor()
        this.container.add(this.floor.container)
    }
}