import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useEffect } from 'react';
import { useAnimations, Environment, Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import '../styles/WelcomePage.css';

function DustParticles() {
    
    const particlesRef = useRef();
    const particleCount = 100;

    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20; 
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20; 
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20; 
    }

    useFrame((state, delta) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y += delta * 0.1;
            particlesRef.current.position.x += delta * 0.2; 
            if (particlesRef.current.position.x > 10) {
                particlesRef.current.position.x = -10; 
            }
        }
    });

    return (
        <Points ref={particlesRef} positions={positions}>
        <PointMaterial
            transparent
            color="#ffffff"
            size={0.1}
            opacity={0.4}
            sizeAttenuation={true}
        />
        </Points>
    );
}

function Model() {

    const gltf = useLoader(GLTFLoader, './model/animated_drone.glb');
    const modelRef = useRef();
  
    const { actions } = useAnimations(gltf.animations, modelRef);

    useEffect(() => {
        if (actions) {
            const animation = Object.values(actions)[0];
            if (animation) {
                animation.play();
            }
        }
    }, [actions]);

    return (
        <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={[32, 32, 32]}
            position={[-0.5, -3, -4]}
            rotation={[0.3, 0.5, 0.1]}
        />
    );
}

function WelcomePage() {
    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <div style={{ height: '100%' }}>
                <Canvas
                    camera={{ position: [0.2, 0.7, 4], fov: 60 }}
                    onCreated={({ gl, scene }) => {
                        scene.fog = new THREE.Fog('#f0f0f0', 5, 15);
                    }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={2} />
                    <Environment preset="sunset" background={true} backgroundBlurriness={0.5} />
                    <Suspense fallback={null}>
                        <Model />
                        <DustParticles />
                    </Suspense>
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        enableRotate={false}
                    />
                </Canvas>
            </div>
            <div className="slogan-main-container">
                <h1 className="slogan-main">
                    Повноцінний сайт для вибору компонентів дронів
                </h1>
                <span className="slogan-additional">
                    Збирай повнофункціональні FPV-дрони швидше, простіше та впевненіше —
                    платформа об’єднує понад 500 компонентів, зручну 3D-візуалізацію,
                    автоматичну перевірку сумісності та живу спільноту,
                    щоб допомогти тобі на кожному етапі
                </span>
            </div>
        </div>
    );
}

export default WelcomePage;