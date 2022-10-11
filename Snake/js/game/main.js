import BonusManager from './bonusManager.js'
import Difficulty, { DifficultyLevel } from './difficulty.js'
import Keyboard from './keyboard.js'
import TexturePlane from './texturePlane.js'
import  { Snake } from './snake.js'
export default class
{
    constructor(data)
    {      
        //param
        this.timer = data.timer
        this.textures = data.textures

        // Set up 
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false
        this.running = false

        this.keyboard = new Keyboard()
        this.onKeyDown = this.onKeyDown.bind(this)        
        this.keyboard.on('keydown', this.onKeyDown)

        this.initBackground()
        this.initSnake()
        this.initDifficulty()
        this.initBonus()
        this.reset() 
    }

    resize(width, height)
    {
        this.bg.resize(width, height)
        this.snake.resize(width, height)
        this.bonusManager.resize(width, height)
    }


    onKeyDown(key)
    {
        if (!this.running)
        {
            console.log("Start GAME")
            this.running = true;
        }      
        else
        {
            if (key == 'p')
            {
                this.running = false;
                alert("Jeu en pause\nAppuyer sur n'importe quel touche pour reprendre!")
            }
        }  
    }

    reset()
    {
        this.running = false;
        this.snake.reset();
        this.score = 0;
        this.difficulty.setDifficulty(DifficultyLevel.Easy)
        this.timer.deltaTarget = this.difficulty.move_duration
        this.bonusManager.reset();
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
        this.snake.reach()
        //Check if on bonus
        this.bonusManager.reach()
        //Check if game over.
        this.checkGameOver()
    }

    checkGameOver() 
    {
        if (this.snake.x < 0 || this.snake.x > 24
            || this.snake.y < 0 || this.snake.y > 13 
            || this.snake.eat_himself())
        {
            this.running = false;     
            console.log("GAME OVER")
            this.showScore(this.score);
            this.reset();
        }
    }
    
    showScore(score)
    {
        var message_body = "Vous avez perdu\n\n"
        message_body += "Score: "
        message_body += score
        alert(message_body)
    }

    eatBonus()
    {
        this.score += this.difficulty.score_per_bonus
        this.difficulty.getNewDifficulty(this.difficulty.level, this.score)
        this.timer.deltaTarget = this.difficulty.move_duration
    }

    initBonus()
    {
        this.bonusManager = new BonusManager({
            snake: this.snake,
            container: this.container,
            textures: this.textures,
            game: this,
        })
    }

    initSnake()
    {
        this.snake = new Snake({
            container: this.container,
            textures: this.textures
        })
    }

    initDifficulty()
    {
        this.difficulty = new Difficulty()
    }

    initBackground()
    {
        this.bg = new TexturePlane({
            width: 1600,
            height: 896,
            texture: this.textures.bg,
            alphaMapIgnore: true
        });
        this.container.add(this.bg.container)
    }
}