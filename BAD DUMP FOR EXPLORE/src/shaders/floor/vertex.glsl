export default "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main()\n{\n    vUv = uv;\n\n    vec3 newPosition = position;\n    newPosition.z = 1.0;\n    gl_Position = vec4(newPosition, 1.0);\n}\n";