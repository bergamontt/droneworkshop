import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';

function Model() {
    
    const gltf = useLoader(GLTFLoader, '/model/drone_v1.gltf');
    const modelRef = useRef();

    return (
        <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={[10, 10, 10]} 
            position={[0, 0, 0]} 
            rotation={[0, 0, 0]}
        />
    );
}

function DroneShowcase() {
    return (
        <Canvas
            camera={{ position: [0, 2, 5], fov: 45 }}
            style={{ height: '100vh', width: '100%' }}
            gl={{ antialias: true, powerPreference: 'high-performance' }}
            frameloop="demand"
        >
            <ambientLight intensity={0.6} />
            <directionalLight position={[-2, 5, 2]} intensity={1.5} />
            <Environment 
                preset="sunset" 
                background={true} 
                backgroundBlurriness={0.7}
            /> 
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <OrbitControls
                enablePan={false}
                enableZoom={true}
                enableRotate={true}
            />
        </Canvas>
  );
}

export default DroneShowcase;