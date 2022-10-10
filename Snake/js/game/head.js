import HeadMaterial from '../shader_materials/head.js'
import PosHelper from './posHelper.js'

export default class Head extends PosHelper
{
    constructor(_options)
    {
        super()
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
        this.mesh.position.x = -1 + 64/1600
        this.mesh.position.y = -1 + 64/896
        this.mesh.updateMatrix() 
        this.container.add(this.mesh)
    }
}
