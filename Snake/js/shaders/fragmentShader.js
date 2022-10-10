export default String = /*glsl*/`
uniform sampler2D tBackground;
varying vec2 vUv;

void main()
{
    vec4 color = texture2D(tBackground, vUv);
    if (color.r > 0.8 && color.g < 0.2 && color.b < 0.2)
    {
        discard;
    }
    gl_FragColor = color;
}`;