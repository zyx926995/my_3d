// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a light
const light = new THREE.PointLight(0xffffff, 1, 0);
light.position.set(50, 50, 50);
scene.add(light);

// Load and display the 3D model
const loader = new THREE.OBJLoader();
loader.load(
  './my_3d/clothes.obj', // Replace this with the path to your obj model
  function (obj) {
    scene.add(obj.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Set the camera position
camera.position.z = 5;

// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
