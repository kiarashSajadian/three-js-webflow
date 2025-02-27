import "./styles/style.css";
import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
scene.add(camera);
const renderer = new THREE.WebGLRenderer({
    canvas:canvas;
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
