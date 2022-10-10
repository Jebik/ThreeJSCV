
import Bonus from './bonus.js'

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

export default class BonusManager
{
    constructor(data)
    {
        this.container = data.container
        this.game = data.game
        this.snake = data.snake
        this.bonusList = []
    }

    reset()
    {
        //REMOVE ALL
        this.bonusList.forEach(bonus => {
            this.container.remove(bonus.container)
            this.bonusList = this.bonusList.filter(function(b)
            { return b != bonus })
        });

        this.spawnBonus()
    }

    spawnBonus()
    {
        if (this.game.difficulty.bonus_count > this.bonusList.length)
        {
            var x = Math.floor(Math.random() * 25);
            var y = Math.floor(Math.random() * 14);
            var bonus = new Bonus()
            bonus.setPosition(x, y)
            this.bonusList.push(bonus)
            this.container.add(bonus.container)
            this.spawnBonus() 
        }
    }

    reach()
    {        
        this.bonusList.forEach(bonus => {
            if (this.snake.x == bonus.x && this.snake.y == bonus.y)
            {
                this.game.eatBonus()
                this.container.remove(bonus.container)
                this.bonusList = this.bonusList.filter(function(b)
                {
                    return b != bonus
                })
                this.snake.grow()
            }
        });
        this.spawnBonus()
    }
}