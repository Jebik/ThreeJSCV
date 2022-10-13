import './lib/three.js'
import CV from './js/Application.js'

console.log(window.application)
window.application = null 

window.application = new CV({
    $canvas: document.querySelector('.cv-canvas'),
    useComposer: true
})