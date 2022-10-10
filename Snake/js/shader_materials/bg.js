import fragmentShader from "../shaders/fragmentShader.js";
import vertexShader from "../shaders/vertexShader.js";

export default function()
{
    var text = new THREE.TextureLoader().load('../images/Background.png')
    const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader, 
        fragmentShader: fragmentShader,
        uniforms: 
        {
            tBackground:
            {
                value: text
            }
        }
    })
    
    return material
}