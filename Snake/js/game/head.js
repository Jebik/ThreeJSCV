import HeadMaterial from '../shader_materials/head.js'

export default class Head
{
    constructor(_options)
    {
        var w = 64/1600 * 2
        var h = 64/896 *2 
        // Container
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false

        // Geometry
        this.geometry = new THREE.PlaneGeometry(w, h, 1, 1)

        // Material
        this.material = new HeadMaterial()

        // Mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.frustumCulled = false
        this.mesh.matrixAutoUpdate = true
        this.offset_x = 64/1600
        this.offset_y = 64/896
        this.mesh.position.x = -1 + 64/1600
        this.mesh.position.y = -1 + 64/896
        this.mesh.updateMatrix() 
        this.container.add(this.mesh)
    }

    setPosition(x,y)
    {
        console.log(y)
        var translated_x = 2*x/25 -1
        var translated_y = 2.*y/14. -1
        console.log(translated_y)
        this.mesh.position.x = translated_x + 64/1600
        this.mesh.position.y = translated_y + 64/896
    }
}
