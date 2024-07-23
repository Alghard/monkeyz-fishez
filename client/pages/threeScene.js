import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeScene = () => {
    useEffect(() => {
        const mount = document.getElementById("ThreeJsMonkey");
        if (!mount) return;

        // Create the renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setClearColor(new THREE.Color("rgb(240, 242, 226)"));
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        mount.appendChild(renderer.domElement);

        // Create a new scene
        const scene = new THREE.Scene();

        // Create a camera
        const camera = new THREE.PerspectiveCamera(30, mount.clientWidth / mount.clientHeight, 1, 1000);
        camera.position.set(0, -5, 2);

        // Create controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.minDistance = 2;
        controls.maxDistance = 1;
        controls.minPolarAngle = 1;
        controls.maxPolarAngle = 1.5;
        controls.autoRotate = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.target = new THREE.Vector3(0, 1, 0);
        controls.update();

        // Add a spotlight
        const spotLight = new THREE.SpotLight(0xffffff, 10000, 100, 5, 20);
        spotLight.position.set(-10, 25, 20);
        spotLight.castShadow = true;
        spotLight.shadow.bias = -0.0001;
        scene.add(spotLight);

        // Load the GLTF model
        const loader = new GLTFLoader().setPath("/king_monkey/");
        loader.load(
            "scene.gltf",
            (gltf) => {
                console.log("loading model");
                const mesh = gltf.scene;

                mesh.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                mesh.position.set(0, 1.05, -1);
                scene.add(mesh);

                // Move the entire scene down by 20 pixels (adjust as needed)
                scene.position.y -= 0.1; // Adjust this value to fit your needs

                const progressContainer = document.getElementById("progress-container");
                if (progressContainer) {
                    progressContainer.style.display = "none";
                }
            },
            (xhr) => {
                console.log(`loading ${(xhr.loaded / xhr.total) * 100}%`);
            },
            (error) => {
                console.error(error);
            }
        );

        // Handle window resize
        const handleResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };

        window.addEventListener("resize", handleResize);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        };
    }, []);
};

export default ThreeScene;
