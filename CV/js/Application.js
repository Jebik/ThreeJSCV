
import './lib/three/three.js'
import WindowSize from './utils/WindowSize.js'
import Timer from './utils/Timer.js'
import Map from './game/main.js'
import Camera from './game/camera.js'

export default class Application
{    
    /**
     * Constructor
     */
    constructor(_options)
    {
        this.canvas = _options.$canvas
        //Creating Base OBJECT
        this.timer = new Timer()
        this.window = new WindowSize()
        
        this.initConfig()
        this.initCamera()
        this.iniRenderer()
        this.initCube()
        this.initMap()
    }

    destructor()
    {
        this.timer.off('tick')
        this.window.off('resize')

        this.renderer.dispose()
    }

    setCamera()
    {
        this.camera = new Camera({
            time: this.time,
            sizes: this.sizes,
            renderer: this.renderer,
            debug: this.debug,
            config: this.config
        })

        this.scene.add(this.camera.container)

        this.time.on('tick', () =>
        {
            if(this.world && this.world.car)
            {
                this.camera.target.x = 0 //this.world.car.chassis.object.position.x
                this.camera.target.y = 0 //this.world.car.chassis.object.position.y
            }
        })
    }
    initCamera()
    {
        this.camera = new THREE.PerspectiveCamera( 120, 3, 3, 1000 );
        this.camera.position.z = 5;
    }
    
    initConfig()
    {
        this.config = {}
        this.config.debug = true
    }


    initCube()
    {
        var geometry = new THREE.BoxGeometry( 3, 2, 3 );
        var material = new THREE.MeshBasicMaterial( { color: 0xaa0044 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add(this.cube);

        // Time tick
        this.timer.on('tick', () =>
        {
            this.cube.rotation.x += 0.02;
            this.cube.rotation.y += 0.01;
            this.cube.position.y = 2;
        })

        
        var geometry = new THREE.BoxGeometry( 30, 1, 30);
        var material = new THREE.MeshBasicMaterial( { color: 0xaa8844 } );
        var plan = new THREE.Mesh( geometry, material );
        plan.position.z = -15
        plan.position.y = -2
        plan.position.x = -5
        this.scene.add(plan);
    }

    initMap()
    {
        this.map = new Map({
            config: this.config,
            time: this.time,
            sizes: this.sizes,
            camera: this.camera,
            renderer: this.renderer
        })
        this.scene.add(this.map.container)
    }

    iniRenderer()
    {
        // Scene
        this.scene = new THREE.Scene();

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true
        });
        this.renderer.setSize(this.window.width, this.window.height);
        document.body.appendChild(this.renderer.domElement );
        //this.renderer.setClearColor(0x414141, 1)
        this.renderer.setClearColor(0xaaeeff, 1)
        this.renderer.setPixelRatio(2)
        this.renderer.gammaOutPut = true
        this.renderer.autoClear = true

        //Render Event
        this.timer.on('tick', () =>
        {
            this.renderer.render(this.scene, this.camera);
        })

        // Resize event
        this.window.on('resize', () =>
        {
            this.renderer.setSize(this.window.width, this.window.height)
        })
    }
}