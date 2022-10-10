import WindowSize from './Utils/WindowSize.js'
import Timer from './Utils/Timer.js'
import './lib/three/three.js'

export default class Application
{    
    /**
     * Constructor
     */
    constructor(_options)
    {
        this.$canvas = _options.$canvas
        //Creating Base OBJECT
        this.timer = new Timer()
        this.sizes = new WindowSize()
        
        this.setConfig()
        this.setCamera()
        this.setRenderer()
        this.setCube()
    }

    destructor()
    {
        this.timer.off('tick')
        this.sizes.off('resize')

        this.renderer.dispose()
    }

    setCamera()
    {
        this.camera = new THREE.PerspectiveCamera( 75, this.sizes.width/this.sizes.height, 0.1, 1000 );
        this.camera.position.z = 5;
    }
    
    setConfig()
    {
        this.config = {}
        this.config.debug = true
    }


    setCube()
    {
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0xaa0044 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add(this.cube);

        // Time tick
        this.timer.on('tick', () =>
        {
            this.cube.rotation.x += 0.02;
            this.cube.rotation.y += 0.01;
        })
    }

    setRenderer()
    {
        // Scene
        this.scene = new THREE.Scene();

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.$canvas,
            alpha: true
        });
        this.renderer.setSize(this.sizes.width, this.sizes.height);
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
        this.sizes.on('resize', () =>
        {
            this.renderer.setSize(this.sizes.width, this.sizes.height)
        })
    }
}