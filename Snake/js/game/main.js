
import Background from './bg.js'
import  { Snake } from './snake.js' 
import BonusManager from './bonus.js'
import Difficulty, { DifficultyLevel } from './difficulty.js'

export default class
{
    constructor(data)
    {      
        // Options
        this.config = data.config
        this.timer = data.timer

        // Set up 
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false
        this.running = false

        this.initSnake()
        this.initDifficulty()
        this.initBonus()
        this.initBackground()
        this.reset()
    }

    reset()
    {
        this.snake.reset();
        this.score = 0;
        this.running = false;
        this.difficulty.setDifficulty(DifficultyLevel.Easy)
        this.bonus.reset();        
    }

    update() 
    {
        if (this.running)
        {
            this.realGameUpdate()
        }
    }

    realGameUpdate() 
    {
        console.log("REALUpdate")
        this.snake.reach()
        //Check if game over.
        this.checkGameOver();
        //Check if on bonus
        this.bonus.reach()
    }

    checkGameOver() 
    {
        if (this.snake.x < 0 || this.snake.x > 24
            || this.snake.y < 0 || this.snake.y > 13 
            || this.snake.eat_himself())
        {
            this.running = false;           
            //show_score(self.score);
            //self.init();
        }
    }

    initBonus()
    {
        this.bonus = new BonusManager({
            snake: this.snake,
            game: this,
        })
    }

    initSnake()
    {
        this.snake = new Snake({
            config: this.config,
            timer: this.timer,
            container: this.container
        })
    }

    initDifficulty()
    {
        this.difficulty = new Difficulty()
        this.timer.deltaTarget = this.difficulty.move_duration
    }

    initControls()
    {
        eventTarget.addEventListener("keydown", (event) => 
        {
            if (event.isComposing || event.keyCode === 229)
            {
                return;
            }
            // do something
        });
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
}