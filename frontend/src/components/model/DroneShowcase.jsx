import { invalidate, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useCallback } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { useNavigate } from "react-router-dom";

function Model({ getSelectedDetailId }) {
    
    const gltf = useLoader(GLTFLoader, '/model/drone_v4.gltf');
    const modelRef = useRef();
    const navigate = useNavigate();

    const markSelected = useCallback((child) => {
        if (!child.userData.baseMaterial) {
            child.userData.baseMaterial = child.material.clone();
        }
        child.material.transparent = false;
        child.material.opacity = 1;
        child.material.emissive.set('black');
        child.material.needsUpdate = true;
    }, []);

    const markUnselected = useCallback((child) => {
        if (!child.userData.baseMaterial) {
            child.userData.baseMaterial = child.material.clone();
        }
        child.material.transparent = true;
        child.material.opacity = 0.2;
        child.material.emissive.set('black');
        child.material.needsUpdate = true;
    }, []);

    const handlePointerOver = useCallback((child) => {
        child.material = child.material.clone();
        child.material.emissive.set('white');
        invalidate();
    }, []);

    const handlePointerOut = useCallback((child, wasSelected) => {
        child.material = child.material.clone();
        child.material.emissive.set('black');
        if (wasSelected) {
            markSelected(child);
        } else {
            markUnselected(child);
        }
        invalidate();
    }, [markSelected, markUnselected]);

    const handleClickOn = useCallback((child) => {
        navigate(`/drone_components/${child.name.toLowerCase()}`);
    }, [navigate]);

    useEffect(() => {
        
        if (!modelRef.current) return;
        
        const detailList = [
            'antenna_rx', 'antenna_vtx', 'battery',
            'camera', 'frame', 'motor', 'propeller', 'rx', 'stack', 'vtx',
        ];

        modelRef.current.traverse((child) => {
            if (child.isMesh && detailList.includes(child.name.toLowerCase())) {
                const detailId = getSelectedDetailId(child.name.toLowerCase());
               
                if (detailId) {
                    markSelected(child);
                } else {
                    markUnselected(child);
                }
               
                child.userData.onPointerOver = () => handlePointerOver(child);
                child.userData.onPointerOut = () => handlePointerOut(child, !!detailId);
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
            rotation={[0, 0, 0]}
            onPointerOver={(e) => {
                e.stopPropagation();
                const child = e.object;
                if (child.userData.onPointerOver) {
                    child.userData.onPointerOver();
                }
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                const child = e.object;
                if (child.userData.onPointerOut) {
                    child.userData.onPointerOut();
                }
            }}
            onClick={(e) => {
                e.stopPropagation();
                const child = e.object;
                if (child.isMesh && child.name) {
                    handleClickOn(child);
                }
            }}
        />
    );
}

function DroneShowcase({ getSelectedDetailId }) {
    return (
        <Canvas
            camera={{ position: [-150, 300, 350], fov: 45 }}
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
                minDistance={300}
                maxDistance={600}
            />
        </Canvas>
    );
}

export default DroneShowcase;