export const DifficultyLevel = Object.freeze({
	Easy: 0,
    Medium: 1,
    Hard: 2,
	Insane: 3});

export default class Difficulty
{
    constructor(data)
    {
        this.setDifficulty(DifficultyLevel.Easy)
    }

    getNewDifficulty(current, score) {
        var new_difficulty = DifficultyLevel.Easy
        switch (current)
        {
            case DifficultyLevel.Easy:
                new_difficulty = DifficultyLevel.Medium
            case DifficultyLevel.Medium:
                new_difficulty = DifficultyLevel.Hard
            case DifficultyLevel.Hard:
                new_difficulty = DifficultyLevel.Insane
            case DifficultyLevel.Insane:
                new_difficulty = DifficultyLevel.Insane
        }

        if (score > this.difficulty.next_level_trigger)
        {
            this.difficulty = setDifficulty(new_difficulty);
        }
    }

    setDifficulty(level) {
        switch (level) 
        {
            case DifficultyLevel.Easy:
                this.move_duration = 400
                this.score_per_bonus = 1,
                this.bonus_count = 4,
                this.level= DifficultyLevel.Easy,
                this.next_level_trigger = 10
                break;
            case DifficultyLevel.Medium:
                this.move_duration = 300
                this.score_per_bonus = 4,
                this.bonus_count = 3,
                this.level= DifficultyLevel.Medium,
                this.next_level_trigger = 50
                break;
            case DifficultyLevel.Hard:
                this.move_duration = 200
                this.score_per_bonus = 6,
                this.bonus_count = 2,
                this.level= DifficultyLevel.Hard,
                this.next_level_trigger = 100
                break;
            case DifficultyLevel.Insane:
                this.move_duration = 100
                this.score_per_bonus = 10,
                this.bonus_count = 1,
                this.level= DifficultyLevel.Insane,
                this.next_level_trigger = 9999999
                break;
        }
    }
}