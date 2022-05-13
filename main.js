import * as THREE from "three"// "./node_modules/three/build/three.module.js"
import { GLTFLoader } from "GLTFLoader" //"/jsm/loaders/GLTFLoader.js";

//const width = canvas.width;// 500
//const height = canvas.height;// 300

//var canvas = document.getElementById("canvas");


const scene = new THREE.Scene();
const canvas = document.querySelector('#threeCanvas');
const renderer = new THREE.WebGLRenderer({canvas,antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.Color( 0x341d08);

//document.body.style.background = "url(" + canvas.toDataURL() + ")";
const camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2,window.innerHeight / - 2, -1000, 1000 );
camera.zoom=1.1;
camera.position.set( -1, 1, 1);
camera.lookAt( 0, 0, 0 );
const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0xFAC898} );
const cube = new THREE.Mesh( geometry, material );
cube.rotateY(5)

const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
const lampLight = new THREE.PointLight( 0xFFDEAD, 2,200 );
directionalLight.position.set(2, 2, 5 );
lampLight.position.set(0, 30, 20 );
lampLight.rotation.set(Math.PI/2,Math.PI/2,Math.PI/2);
scene.add( directionalLight );
scene.add(lampLight);

const loader = new GLTFLoader();
let obj;
/*
loader.load( './models/monkey.glb', function ( glb ) {
    console.log("hello");
    obj = glb;
    obj.scene.scale.set(10,10,10);
	scene.add( obj.scene );
    

}, 	// called while loading is progressing
function ( xhr ) {

    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

},
undefined, function ( error ) {

	console.error( error );

} );
*/

loader.load( './models/cafe.glb', function ( glb ) {
    console.log("hello");
    obj = glb;
    obj.scene.scale.set(20,20,20);
    obj.scene.position.set(0,0,0);
    obj.scene.rotation.set(Math.PI,Math.PI,0);
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
    //renderer.setSize(window.innerWidth, window.innerHeight);
    //camera.fov = Math.atan(window.innerHeight / 2 / camera.position.z) * 2 * THREE.Math.RAD2DEG;
    //camera.aspect = window.innerWidth / window.innerHeight;
    //renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    //camera.updateProjectionMatrix()
}


//footer

var soundOn = true;
var threeOn = true;


document.getElementById("SoundToggle").onclick = function() {
    soundOn=!soundOn;
    if(soundOn) {
        document.getElementById("SoundToggle").innerHTML = "<i class=\"fa-solid fa-volume-high\"></i>";
    }
    else {
        document.getElementById("SoundToggle").innerHTML = "<i class=\"fa-solid fa-volume-xmark\"></i>";
    }

}

document.getElementById("ThreeToggle").onclick = function() {
    threeOn=!threeOn;
    if(threeOn) {
        document.getElementById("ThreeToggle").innerHTML = "3D<i class=\"fa-solid fa-cube\"></i>";
    }
    else {
        document.getElementById("ThreeToggle").innerHTML = "<s>3D</s><i class=\"fa-regular fa-square\"></i>";
    }

}


//Animate
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}

animate();




//text effects

//credit: https://codepen.io/zerospree/pen/GRmBga
$(function(){
    var $jittery = $('.jittery'),
        aText    = $jittery.text().split(''),
        letters = '';
    
    for(var i = 0; i < aText.length; i++){
      letters += '<span>'+aText[i]+'</span>';
    }
    
    $jittery.empty().append(letters);
    
    $.each($('span', $jittery), function(i){
      $(this).css('animation-delay', '-'+i+'70ms');
    });
  });