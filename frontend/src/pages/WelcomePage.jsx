import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useEffect } from 'react';
import { OrbitControls, useAnimations, Environment } from '@react-three/drei';
import * as THREE from 'three';
import '../styles/WelcomePage.css'

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
            <div style={{height: '100%'}}>
                <Canvas
                    camera={{ position: [0.2, 0.7, 4], fov: 60 }}
                    onCreated={({ gl, scene }) => {
                        scene.fog = new THREE.Fog('white', 5, 10);
                    }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={2} />
                    <Environment preset="sunset" />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                    <OrbitControls
                        enablePan={false} 
                        enableZoom={false} 
                        enableRotate={false} 
                    />
                </Canvas>
            </div>
            <div className='slogan-main-container'>
                <h1 className='slogan-main'>
                    Повноцінний сайт для вибору компонентів дронів
                </h1>
                <span className='slogan-additional'>
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