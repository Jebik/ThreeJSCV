
import PosHelper from './posHelper.js'

export default class BonusManager extends PosHelper
{
    constructor(data)
    {
        super()
    }


    reset()
    {
        this.spawnBonus()
    }

    spawnBonus()
    {
        /*
        
        fn spawn_bonus(&mut self){
            while self.bonus_list.len() < self.difficulty.bonus_count as _
            {
                let mut rng = rand::thread_rng();
                let x:i16 = rng.gen_range(0..self.width);
                let y:i16 = rng.gen_range(0..self.height);
                self.bonus_list.push(Pos{ x, y });
            }
        }*/
    }

    reach()
    {        
        /*
        for i in 0.. self.bonus_list.len()
        {
            let b = self.bonus_list[i];
            if self.snake.pos.x == b.x 
                && self.snake.pos.y == b.y
            {
                //We got apple
                self.score += self.difficulty.score_per_bonus;
                self.snake.start();
                self.update_title(ctx);
                self.bonus_list.remove(i);
                self.get_new_difficulty();
                self.snake.grow();
                self.spawn_bonus();
                break;
            }
        }
        */
    }
}