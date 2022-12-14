import WindowSize from './utils/WindowSize.js'
import Timer from './utils/Timer.js'
import Game from './game/main.js'
/*
window._path = './js/'
let WindowSize = await _import('utils/WindowSize.js');
let Timer = await _import('utils/Timer.js');
let Game = await _import('game/main.js');
console.log(window._path)
console.log(WindowSize)
console.log(Timer)
console.log(Game)
*/
/* 
IMPORT THREE
import './lib/three.js'
*/

const WIDTH = 1600
const HEIGHT = 896
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
        this.init()
    }

    init() 
    {
        console.log("Texture LOADER" + window._path)
        this.loader = new THREE.TextureLoader()
        this.textures = 
        {
            bg: 
            {
                data: this.loader.load(_path+'./images/Background.png')
            },
            head: 
            {
                data: this.loader.load(_path+'./images/SnakeHead.png'),
                alpha: this.loader.load(_path+'./images/SnakeHeadAlpha.png')
            },
            body: 
            {
                data: this.loader.load(_path+'./images/SnakeBody.png'), 
                alpha: this.loader.load(_path+'./images/SnakeBodyAlpha.png')
            },
            bonus: 
            {
                data: this.loader.load(_path+'./images/SnakeBonus.png'),
                alpha: this.loader.load(_path+'./images/SnakeBonusAlpha.png')
            }
        }        
        
        this.setCamera()
        this.initRenderer()
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
        var left = 0
        var right = WIDTH
        var top = 0
        var bottom = HEIGHT
        var near = -1
        var far = 1           
        this.camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far)
        this.camera.zoom = 1
    }
    
    initMap()
    {
        this.game = new Game({
            timer: this.timer,
            textures: this.textures
        })
        this.scene.add(this.game.container)
        this.resize();
    }

    initRenderer()
    {
        // Scene
        this.scene = new THREE.Scene();
        
        console.log(this.scene)

        // Renderer
        console.log(this.canvas)
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        this.renderer.setSize(this.window.width, this.window.height);
        document.body.appendChild(this.renderer.domElement );
        this.renderer.setClearColor(0xaaeeff, 1)
        this.renderer.setPixelRatio(1)
        this.renderer.gammaOutPut = true
        this.renderer.autoClear = true

        
        this.draw = this.draw.bind(this)
        this.resize = this.resize.bind(this)
        //Render Event
        this.timer.on('tick', this.draw)
        //Render Event
        this.timer.on('reach', () =>
        {
            this.game.update();
        })

        // Resize event
        this.window.on('resize', this.resize)
    }
    
    resize()
    {
        //RENDERER UPDATE
        var width = this.window.width
        var height = this.window.height
        this.renderer.setSize(width, height)
        //CAMERA UPDATE
        this.camera.right = width
        this.camera.bottom = height
        this.camera.updateProjectionMatrix()
        //RESIZE GEO
        this.game.resize(width, height) 
    }

    draw()
    {
        this.renderer.render(this.scene, this.camera);
    }
}