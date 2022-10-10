import './lib/three.js'
import WindowSize from './utils/WindowSize.js'
import Timer from './utils/Timer.js'
import Game from './game/main.js' 

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
        this.iniRenderer()
        this.initCamera()
        this.initCube()
        this.initMap()
    }

    destructor()
    {
        this.timer.off('tick')
        this.window.off('resize')

        this.renderer.dispose()
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
        // Time tick
        this.timer.on('tick', () =>
        {
            
        })
    }

    initMap()
    {        
        this.game = new Game({
            config: this.config,
            time: this.time,
            sizes: this.sizes,
            camera: this.camera,
            renderer: this.renderer
        })
        this.scene.add(this.game.container)
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