
export default class Application {
    constructor(_options)
    {
        // Options
        this.$canvas = _options.$canvas

        // Set up
        /*
        this.time = new Time()
        this.sizes = new Sizes()
        this.resources = new Resources()
        */

        this.setConfig()
        this.setRenderer()
        this.setCamera()
        this.setWorld()
    }

    /**
     * Set config
     */
    setConfig()
    {
        this.config = {}
        this.config.touch = false

        window.addEventListener('touchstart', () =>
        {
            this.config.touch = true
            this.world.controls.setTouch()
         }, { once: true })
    }

    /**
     * Set renderer
     */
    setRenderer()
    {
        // Scene
        this.scene = new THREE.Scene()

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.$canvas,
            alpha: true
        })
        this.renderer.setClearColor(0x000000, 1)
        this.renderer.setPixelRatio(2)
        this.renderer.setSize(this.sizes.viewport.width, this.sizes.viewport.height)
        this.renderer.physicallyCorrectLights = true
        this.renderer.gammaFactor = 2.2
        this.renderer.gammaOutPut = true
        this.renderer.autoClear = false

        // Resize event
        this.sizes.on('resize', () =>
        {
            this.renderer.setSize(this.sizes.viewport.width, this.sizes.viewport.height)
        })
    }
    
    /**
     * Set camera
     */
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
                this.camera.target.x = this.world.car.chassis.object.position.x
                this.camera.target.y = this.world.car.chassis.object.position.y
            }
        })
    }

    /**
     * Set world
     */
     setWorld()
     {
         this.world = new World({
             config: this.config,
             debug: this.debug,
             resources: this.resources,
             time: this.time,
             sizes: this.sizes,
             camera: this.camera,
             renderer: this.renderer,
             passes: this.passes
         })
         this.scene.add(this.world.container)
     }

	/*static start() 
    {
	    var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );    
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        
        camera.position.z = 5;
        
        var animate = function () {
            requestAnimationFrame( animate );
        
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        
            renderer.render( scene, camera );
        };

        animate();
    }*/
}