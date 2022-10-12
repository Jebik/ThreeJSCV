export default async function load() {
    console.log("Main")
    await _import('./lib/three.js')
    let SnakeGame = await _import('./js/Application.js');
    console.log(SnakeGame)

    console.log(_path)
    window.application = new SnakeGame({
        $canvas: document.querySelector('.canvas'),
        useComposer: true
    })
}