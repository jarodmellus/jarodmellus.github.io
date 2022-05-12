import * as THREE from "three"// "./node_modules/three/build/three.module.js"
import { GLTFLoader } from "GLTFLoader" //"/jsm/loaders/GLTFLoader.js";

//const width = canvas.width;// 500
//const height = canvas.height;// 300

//var canvas = document.getElementById("canvas");


const scene = new THREE.Scene();
const canvas = document.querySelector('#threeCanvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.Color( 0x341d08);

//document.body.style.background = "url(" + canvas.toDataURL() + ")";

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );
const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0x7B3F55} );
const cube = new THREE.Mesh( geometry, material );
cube.rotateY(5)

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( 0, 1, 0 );
scene.add( directionalLight );

const loader = new GLTFLoader();
let obj;
loader.load( './models/cafe.glb', function ( gltf ) {
    console.log("hello");
    obj = gltf;
    obj.scene.scale.set(1,1,1);
	scene.add( obj.scene );
    

}, 	// called while loading is progressing
function ( xhr ) {

    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

},
undefined, function ( error ) {

	console.error( error );

} );



//scene.add( cube );
renderer.render( scene, camera );

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.fov = Math.atan(window.innerHeight / 2 / camera.position.z) * 2 * THREE.Math.RAD2DEG;
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix()
}


//footer

soundOn = false;

document.getElementById("SoundToggle").onclick() = function() {
    soundOn=!soundOn;
    if(soundOn) {
        document.getElementById("SoundToggle").innerHTML = "<i class=\"fa-solid fa-volume\"></i>";
    }
    else {
        document.getElementById("SoundToggle").innerHTML = "<i class=\"fa-solid fa-volume-slash\"></i>";
    }

}
