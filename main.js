this.konamiCode = {}
this.konamiCode.sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
this.konamiCode.keyIndex = 0
this.konamiCode.latestKeys = []
this.konamiCode.count = 0

this.konamiCode.testInput = (_input) =>
{
    this.konamiCode.latestKeys.push(_input)

    if(this.konamiCode.latestKeys.length > this.konamiCode.sequence.length)
    {
        this.konamiCode.latestKeys.shift()
    }

    if(this.konamiCode.sequence.toString() === this.konamiCode.latestKeys.toString())
    {
        alert("KONAMI SUCCESS")
    }
}

/**
 * Keyboard handling
 */
window.addEventListener('keydown', (_event) =>
{
    this.konamiCode.testInput(_event.key)
})