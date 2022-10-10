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
        this.setCamera()
        this.initMap()
    }
    

    destructor()
    {
        this.timer.off('tick')
        this.timer.off('reach')
        this.window.off('resize')

        this.renderer.dispose()
    }

    setCamera()
    {
        var w = 1600
        var h = 896
        var aspectRatio = h / w;
        var left = -aspectRatio*2
        var right = aspectRatio*2
        var top = 1
        var bottom = -1
        var near = -1
        var far = 1
                
        this.camera = new THREE.OrthographicCamera(
            left,
            right,
            top,
            bottom,
            near,
            far);
        this.camera.updateProjectionMatrix();
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
        this.renderer.setPixelRatio(1)
        this.renderer.gammaOutPut = true
        this.renderer.autoClear = true

        
        this.draw = this.draw.bind(this)
        //Render Event
        this.timer.on('tick', this.draw);
        //Render Event
        this.timer.on('reach', () =>
        {
            this.game.update();
        })

        // Resize event
        this.window.on('resize', () =>
        {
            this.setCamera()
            this.renderer.setSize(this.window.width, this.window.height)
        })
    }

    draw()
    {
        this.renderer.render(this.scene, this.camera);
    }
}