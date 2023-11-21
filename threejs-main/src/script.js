import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import './style.css';
import {func} from "three/addons/nodes/code/FunctionNode";

const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 'yellow',
    wireframe: true
});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const sizes = {
    width: 600,
    height: 600
}

const canvas = document.querySelector('.canvas');

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.y = 1;
camera.position.z = 3;

const controls = new OrbitControls(camera, canvas);

controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 15;

scene.add(camera);


const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

const clock = new THREE.Clock();

const tick = () => {
    const delta = clock.getDelta();

    controls.update(delta);
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

tick();

