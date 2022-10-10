export default String = /*glsl*/`
varying vec2 vUv;
void main()
{
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix  * modelViewMatrix * vec4( position, 1.0 );
}`;