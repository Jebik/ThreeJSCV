
export default class Snake
{
    constructor(data)
    {
    }


    reset()
    {
        this.spawnBonus()
    }

    spawnBonus()
    {
    }

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