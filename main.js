import * as THREE from "https://cdn.skypack.dev/three@0.134.0/build/three.module.js"
import { OrbitControls } from "https://cdn.skypack.dev/three@0.134.0/examples/jsm/controls/OrbitControls.js"


// Initialize three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create Rubik's Cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // red
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // green
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // blue
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // yellow
    new THREE.MeshBasicMaterial({ color: 0xffa500 }), // orange
    new THREE.MeshBasicMaterial({ color: 0xffffff }), // white
];
const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
scene.add(cube);

// Initialize OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// Render the scene
function render() {
    requestAnimationFrame(render);
    controls.update(); // Update camera position
    renderer.render(scene, camera);
}
render();


