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
	let {default: head} = await import(_path+'./head.js');
    console.log(head)
    document.getElementsByTagName('head')[0].innerHTML = head
	await import(_path+'./main.js');
}

load_module('./CV/')