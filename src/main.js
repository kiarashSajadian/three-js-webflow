// Import the CSS styles for the application
import "./styles/style.css";

// Import the Three.js library for 3D rendering
import * as THREE from "three";

// Select the canvas element with the class "webgl" from the HTML document
const canvas = document.querySelector("canvas.webgl");

// Create a new Three.js scene where all 3D objects will be placed
const scene = new THREE.Scene();

// Create a perspective camera with a field of view of 75 degrees,
// an aspect ratio based on the window size, and near/far clipping planes at 0.1 and 1000 units
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Position the camera 5 units away from the origin on the Z-axis
camera.position.z = 5;

// Add the camera to the scene
scene.add(camera);

// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create a WebGL renderer and link it to the selected canvas
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

// Set the renderer size to match the full window dimensions
renderer.setSize(window.innerWidth, window.innerHeight);

// Animation
function animation() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // Render the scene from the perspective of the camera
  renderer.render(scene, camera);
}
