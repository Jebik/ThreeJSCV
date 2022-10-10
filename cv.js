import Application from './CV/js/Application.js'
window.application = new Application({
    $canvas: document.querySelector('.cv-canvas'),
    useComposer: true
})

import SnakeGame from './Snake/js/Application.js'
window.application = new SnakeGame({
    $canvas: document.querySelector('.snake-canvas'),
    useComposer: true
})