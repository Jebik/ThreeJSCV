import WindowSize from './utils/WindowSize.js'
import Timer from './utils/Timer.js'
import Game from './game/main.js'
/* 
IMPORT THREE
import './lib/three.js'
*/
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
        this.initMap()
    }
    

    destructor()
    {
        this.timer.off('tick')
        this.timer.off('reach')
        this.window.off('resize')

        this.renderer.dispose()
    }

    initCamera()
    {
        this.camera = new THREE.PerspectiveCamera(45, this.window.width/this.window.height, 1, 1000 );
        this.camera.position.z = 0.64
    }
    
    initConfig()
    {
        this.config = {}
        this.config.debug = true
    }

    initMap()
    {
        this.game = new Game({
            config: this.config,
            timer: this.timer,
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
        //Render Event
        this.timer.on('reach', () =>
        {
            this.game.update();
        })

        // Resize event
        this.window.on('resize', () =>
        {
            this.renderer.setSize(this.window.width, this.window.height)
        })
    }
}