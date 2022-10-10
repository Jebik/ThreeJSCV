import Material from '../shader_materials/bonus.js'
import PosHelper from './posHelper.js'

export default class Bonus extends PosHelper
{   
    constructor(_options)
    {
        super()
        var w = 64/1600
        var h = 64/896
        // Container
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false

        // Geometry
        this.geometry = new THREE.PlaneGeometry(2*w, 2*h)

        // Material
        this.material = new Material()

        // Mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.frustumCulled = false
        this.mesh.matrixAutoUpdate = true
        this.mesh.position.x = 64/1600
        this.mesh.position.y = 64/896
        this.mesh.position.z = 0
        this.mesh.updateMatrix() 
        this.container.add(this.mesh)
    }
}