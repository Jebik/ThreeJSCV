import WebGL from './WebGL.js';
import GameCv from './game_cv.js';


if ( WebGL.isWebGLAvailable() ) {
	GameCv.start();
} 
else 
{
	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );
}