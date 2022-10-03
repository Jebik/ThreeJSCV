import WebGL from './WebGL.js';
import Application from './Application.js'

if ( WebGL.isWebGLAvailable() ) {
	window.application = new Application({
    	$canvas: document.querySelector('.js-canvas'),
    	useComposer: true
	})
} 
else 
{
	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );
}