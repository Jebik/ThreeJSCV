export default async function load() {
    console.log("Main")
    await _import('lib/three.js')
    let SnakeGame = await _import('js/Application.js');
    
    window.application = new SnakeGame({
        $canvas: document.querySelector('.canvas'),
        useComposer: true
    })
}