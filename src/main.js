import "./styles/style.css";
import * as THREE from "three";

console.log("Hello from Kiarash Sajadiann");
console.log(THREE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
scene.add(camera);
