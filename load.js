window.konamiCode = {}
window.konamiCode.sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
window.konamiCode.keyIndex = 0
window.konamiCode.latestKeys = []
window.konamiCode.count = 0

window.konamiCode.testInput = (_input) =>
{
    window.konamiCode.latestKeys.push(_input)

    if(window.konamiCode.latestKeys.length > window.konamiCode.sequence.length)
    {
        window.konamiCode.latestKeys.shift()
    }

    if(window.konamiCode.sequence.toString() === window.konamiCode.latestKeys.toString())
    {
        load_module('./Snake/')
    }
}

/**
 * Keyboard handling
 */
window.addEventListener('keydown', (_event) =>
{
    window.konamiCode.testInput(_event.key)
    if (_event.key == 'Escape')
    {
        load_module('./CV/')
    }
})

async function load_module (path) {
    window._path = path
    console.log("LOAD P1")
	let {default: head} = await import(_path+'./head.js');
    console.log("LOAD P2")
	let {default: content} = await import(_path+'./content.js');
    console.log(head)
    document.getElementsByTagName('head')[0].innerHTML = head
    
    console.log("LOAD P3")
    console.log(document.getElementById('content'))
    
    console.log("LOAD P4")
    document.getElementById('content').innerHTML = content

    console.log("LOAD P5")
	await import(_path+'./main.js');
}
document.addEventListener("load", function(event) {
    console.log("ON LOAD?")
    load_module('./CV/')
});
if (document.readyState == 'interactive')
{
    load_module('./CV/')
}