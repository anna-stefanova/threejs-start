import * as THREE from 'three';
import './style.css';

const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 'purple',
    wireframe: true
});

// const group = new THREE.Group();
// group.scale.x = 2;
// group.rotation.x = Math.PI * 0.25;
//
// const cube1 = new THREE.Mesh(geometry, material);
// cube1.position.x = -1.5;
//
// const cube2 = new THREE.Mesh(geometry, material);
// cube2.position.x = 0;
//
// const cube3 = new THREE.Mesh(geometry, material);
// cube3.position.x = 1.5;
//
// group.add(cube1, cube2, cube3);

// scene.add(group);

const mesh = new THREE.Mesh(geometry, material);
// mesh.position.y = 0.8;
// mesh.position.x = 1.5;
// mesh.position.z = 1.5;
//
// mesh.scale.x = 2;
// mesh.scale.y = 0.8;
// mesh.scale.z = 0.5;
//
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.x = Math.PI * 0.75;

scene.add(mesh);

const sizes = {
    width: 600,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y =1;

scene.add(camera);

const canvas = document.querySelector('.canvas2');


const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    camera.position.x = Math.cos(elapsedTime);
    camera.position.y = Math.sin(elapsedTime);
    camera.lookAt(mesh.position);

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};
tick();




