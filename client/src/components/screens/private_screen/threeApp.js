import React from "react";
import * as THREE from "three";
import plusPng from "./assets/plus.png";

class ThreeApp extends React.Component {
  componentDidMount() {
    // Texture Loader
    const Loader = new THREE.TextureLoader();
    const plus = Loader.load(plusPng);

    // Debug
    // const gui = new dat.GUI();

    // Canvas
    // const canvas = document.querySelector("canvas.webgl");
    // const canvas = document.getElementById("webgl");

    // Scene
    const scene = new THREE.Scene();

    // Objects
    // const geometry = new THREE.SphereGeometry(0.7, 32, 32);
    const geometry = new THREE.IcosahedronGeometry(0.7, 9);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 5000;

    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Materials
    const material = new THREE.PointsMaterial({
      size: 0.009,
      color: 0x15eae9,
    });

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.007,
      map: plus,
      transparent: true,
      color: 0xffffff,
    });

    // Mesh
    const sphere = new THREE.Points(geometry, material);
    const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(sphere, particleMesh);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    // SIZES
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // CAMERA
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    // RENDERER
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color("#2f3239"), 1);
    //MOUNTIG THE RENDERER
    this.mount.appendChild(renderer.domElement);

    //mouse
    document.addEventListener("mousemove", animateParticles);
    let mouseX = 0;
    let mouseY = 0;

    function animateParticles(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    // ANIMATE
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects
      sphere.rotation.y = 0.5 * elapsedTime;
      sphere.rotation.z = 0.5 * elapsedTime;

      if (mouseX !== 0) {
        particleMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
        particleMesh.rotation.y = mouseX * (elapsedTime * 0.00008);
      } else {
        particleMesh.rotation.x = -0.05 * elapsedTime;
        particleMesh.rotation.y = 0.05 * elapsedTime;
        particleMesh.rotation.z = 0.02 * elapsedTime;
      }

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }

  render() {
    const mystyle = {
      position: "fixed",
      top: "0",
      right: "0",
      outline: "none",
    };
    return (
      <div
        ref={(ref) => (this.mount = ref)}
        className="webgl"
        style={{ mystyle }}
      />
    );
  }
}

export default ThreeApp;
