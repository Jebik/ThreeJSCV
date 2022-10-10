import BackgroundMaterial from '../shader_materials/bg.js'

export default class Background
{
    constructor(_options)
    {
        // Container
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false

        // Geometry
        this.geometry = new THREE.PlaneGeometry(2, 2)

        // Material
        this.material = new BackgroundMaterial()

        // Mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material)

  //      this.mesh.position.set(1, 1, 0);
 //       this.mesh.rotation.set(-Math.PI / 8, 0, 0);
//        this.mesh.frustumCulled = true
 //       this.mesh.matrixAutoUpdate = true
        this.mesh.updateMatrix()
//        this.mesh.position.z = 1
        this.container.add(this.mesh)
    }
}
