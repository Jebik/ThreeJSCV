import { Dir } from "./snake.js"

export default class TexturePlane
{   
    constructor(data)
    {
        this.w = data.width
        this.h = data.height
        this.x = 0
        this.y = 0
        this.offset_x = this.w/2.
        this.offset_y = this.h/2.
        this.ratio_w = this.w/1600.
        this.ratio_h = this.h/896.
        this.rotatable = data.rotatable
        this.alphaMapIgnore = data.alphaMapIgnore
    
        // Geometry
        this.geometry = new THREE.PlaneGeometry(this.w, this.h)
        
        //Texture
        this.texture = data.texture
        if (this.rotatable)
        {
            this.texture.data.center.set(0.5, 0.5);
            this.texture.data.rotation = this.getRotation(Dir.Up);
        }
        else
        {
            this.texture.data.offset.set(0, 1);
            this.texture.data.repeat.set(1, -1);              
        } 
        // Container
        this.container = new THREE.Object3D()

        if (this.alphaMapIgnore)
        {
            this.material = new THREE.MeshBasicMaterial({
                map: this.texture.data,
                side: THREE.DoubleSide, 
            })
        }
        else
        {
            this.material = new THREE.MeshBasicMaterial({
                map: this.texture.data, 
                alphaMap: this.texture.alpha,
                transparent: true,
                side: THREE.DoubleSide, 
            })
        }


        // Mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(this.offset_x, this.offset_y, 0)
        this.container.add(this.mesh)
    }

    resize(width, height)
    {
        //NEW W H
        this.w = width * this.ratio_w
        this.h = height * this.ratio_h
        //NEW OFFSET
        this.offset_x = this.w/2.
        this.offset_y = this.h/2.
        
        //POS
        var x = this.w*this.x + this.offset_x
        var y = this.h*this.y + this.offset_y

        //REMOVE MESH
        this.container.remove(this.mesh)
        //RECREATE GEO
        this.geometry = new THREE.PlaneGeometry(this.w, this.h)   
        //RECREATE MESH     
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(x, y, 0)
        this.container.add(this.mesh)
    }
    
    rotate(rotation)
    {
        this.texture.data.rotation = this.getRotation(rotation); // rotation is around [ 0.5, 0.5 ]

        //POS
        var x = this.w*this.x + this.offset_x
        var y = this.h*this.y + this.offset_y


        //REMOVE MESH
        this.container.remove(this.mesh)
        //RECREATE MATERIAL
        this.material = new THREE.MeshBasicMaterial({
            map: this.texture.data,
            alphaMap: this.texture.alpha,
            transparent: true,
            side: THREE.DoubleSide,
        })
        //RECREATE MESH
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(x, y, 0) 
        this.container.add(this.mesh)

    }

    getRotation(rotation)
    {
        switch (rotation)
        {
            case Dir.Up:
                return -Math.PI
            case Dir.Down:
                return 0
            case Dir.Right:
                return -Math.PI/2
            case Dir.Left:
                return Math.PI/2
        }
    }

    setPosition(x,y)
    {
        //NEW X Y
        this.x = x
        this.y = y
        //POS
        var x = this.w*this.x + this.offset_x
        var y = this.h*this.y + this.offset_y
        //ONLY MOVE THE MESH
        this.mesh.position.set(x, y, 0) 
    }
}