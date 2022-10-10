const fragmentShader = /*glsl*/`
uniform sampler2D tBackground;
varying vec2 vUv;

void main()
{
    vec4 backgroundColor = texture2D(tBackground, vUv);
    //gl_FragColor = vec4(0.,0.,0.5,0.5);
    gl_FragColor = backgroundColor;
}`;

const vertexShader = /*glsl*/` 
varying vec2 vUv;
void main()
{
    vUv = uv;
    vec3 newPosition = position;
    newPosition.z = 1.0;
    gl_Position = vec4(newPosition, 1.0);
}`;

export default function()
{
    var text = new THREE.TextureLoader().load('../images/text.png')
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