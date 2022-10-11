import './lib/three.js'
import SnakeGame from './js/Application.js'
window.application = new SnakeGame({
    $canvas: document.querySelector('.canvas'),
    useComposer: true
})