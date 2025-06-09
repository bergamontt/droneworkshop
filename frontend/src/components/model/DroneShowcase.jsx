import {invalidate, useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import {Suspense, useEffect, useRef} from 'react';
import { Environment, OrbitControls } from '@react-three/drei';

function Model({getSelectedDetailId}) {
    const gltf = useLoader(GLTFLoader, '/model/drone_v4.glb');
    const modelRef = useRef();

    const markSelected = (child) => {
        child.material = child.material.clone();
        child.material.color.set('rgba(30,30,30,0.27)');
    }

    const markUnselected = (child) => {
        child.material = child.material.clone();
        child.material.color.set('#ff0000');
    }

    useEffect(() => {
        if (!modelRef.current) return;
        const detailList = ["antenna_rx", "antenna_vtx", "battery",
            "camera", "frame", "motor", "propeller", "rx", "stack", "vtx",
        ];
        modelRef.current.traverse((child) => {
            if (child.isMesh && detailList.includes(child.name.toLowerCase())) {
                const detailId = getSelectedDetailId(child.name.toLowerCase());
                if (detailId)
                    markSelected(child);
                else
                    markUnselected(child);
            }
        });
        invalidate();
    }, [getSelectedDetailId, gltf]);

    return (
        <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={[1, 1, 1]}
            position={[0, 0, 0]}
            rotation={[0, 0, 5.5]}
        />
    );
}

function DroneShowcase({getSelectedDetailId}) {
    return (
        <Canvas
            camera={{ position: [0, -400, 200], fov: 45 }}
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
                <Model getSelectedDetailId={getSelectedDetailId} />
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