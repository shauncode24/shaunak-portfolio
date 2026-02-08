import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RainDrops({ count = 200 }) {
    const meshRef = useRef();

    // Initialize rain drops with random positions and speeds
    const drops = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                x: (Math.random() - 0.5) * 40,
                y: Math.random() * 20 - 10,
                z: (Math.random() - 0.5) * 10,
                speed: 0.2 + Math.random() * 0.3,
                length: 0.4 + Math.random() * 0.3
            });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame(() => {
        drops.forEach((drop, i) => {
            drop.y -= drop.speed;
            drop.x -= drop.speed * 0.1; // Slight slant for wind

            // Reset drop to top if it goes off screen
            if (drop.y < -12) {
                drop.y = 12;
                drop.x = (Math.random() - 0.5) * 45;
            }

            dummy.position.set(drop.x, drop.y, drop.z);
            dummy.scale.set(0.015, drop.length, 1);
            dummy.rotation.z = 0.1;
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial
                color="#88ccff"
                transparent
                opacity={0.4}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </instancedMesh>
    );
}

export default function RainEffect() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 15,
        }}>
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }} alpha={true}>
                <RainDrops count={800} />
            </Canvas>
        </div>
    );
}
