import './lib/three.js'
import CV from './CV/js/Application.js'
window.application = new CV({
    $canvas: document.querySelector('.cv-canvas'),
    useComposer: true
})