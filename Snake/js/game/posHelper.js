
export default class posHelper
{
    constructor()
    {        
        this.offset_x = 64/1600
        this.offset_y = 64/896
        this.x = 0
        this.y = 0
    }

    setPosition(x,y)
    {
        this.x = x
        this.y = y
        var translated_x = 2*x/25 -1
        var translated_y = 2.*y/14. -1
        this.mesh.position.x = translated_x + 64/1600
        this.mesh.position.y = translated_y + 64/896
    }
}