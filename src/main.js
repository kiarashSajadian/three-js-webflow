// Import the CSS styles for the application
import "./styles/style.css";

// Import the Three.js library for 3D rendering
import * as THREE from "three";

// Select the canvas element with the class "webgl" from the HTML document
const canvas = document.querySelector("canvas.webgl");

// Create a new Three.js scene where all 3D objects will be placed
const scene = new THREE.Scene();

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight, // Fixed the typo
};

// Handle window resize to update sizes and camera properties
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera aspect ratio and projection matrix
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer size
  renderer.setSize(sizes.width, sizes.height);
});

// Create a perspective camera with a field of view of 75 degrees,
// an aspect ratio based on the window size, and near/far clipping planes at 0.1 and 1000 units
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);

// Position the camera 5 units away from the origin on the Z-axis
camera.position.z = 5;

// Add the camera to the scene
scene.add(camera);

// Create a cube: Define geometry (shape) and material (appearance)
const geometry = new THREE.BoxGeometry(1, 1, 1); // A cube with dimensions 1x1x1
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Added a green color
const cube = new THREE.Mesh(geometry, material); // Combine geometry and material into a mesh
scene.add(cube); // Add the cube to the scene

// Create a WebGL renderer and link it to the selected canvas
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

// Set the renderer size to match the full window dimensions
renderer.setSize(sizes.width, sizes.height);

// Animation function to continuously rotate and render the cube
function animation() {
  requestAnimationFrame(animation);

  // Rotate the cube slightly on each frame
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene from the perspective of the camera
  renderer.render(scene, camera);
}

// Start the animation loop
animation();
