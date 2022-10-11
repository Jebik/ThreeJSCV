import './lib/three.js'
import SnakeGame from './Snake/js/Application.js'
window.application = new SnakeGame({
    $canvas: document.querySelector('.snake-canvas'),
    useComposer: true
})