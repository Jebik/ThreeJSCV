export default async function load() {
    console.log("Main")
    await _import('./lib/three.js')
    let SnakeGame = await _import('./js/Application.js');
    console.log(SnakeGame)

    console.log(window.application)
    window.application = null
    window.application = new SnakeGame({
        $canvas: document.querySelector('.snake-canvas'),
        useComposer: true
    })
}