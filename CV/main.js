import './lib/three.js'
import CV from './js/Application.js'
window.application = new CV({
    $canvas: document.querySelector('.canvas'),
    useComposer: true
})