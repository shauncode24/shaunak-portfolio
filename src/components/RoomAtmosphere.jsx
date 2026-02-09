import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DustParticles({ count = 100 }) {
    const meshRef = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            // Create clusters
            const clusterCenters = [
                { x: -2, y: 0, z: -2 },
                { x: 2, y: 1, z: 0 },
                { x: 0, y: -1, z: 2 }
            ];
            const cluster = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];

            // Position relative to cluster center
            const x = cluster.x + (Math.random() - 0.5) * 3;
            const y = cluster.y + (Math.random() - 0.5) * 3;
            const z = cluster.z + (Math.random() - 0.5) * 3;

            const size = Math.random() * 0.005; // Way smaller
            const speed = Math.random() * 0.001;
            const xSpeed = (Math.random() - 0.5) * 0.0005;
            const ySpeed = (Math.random() - 0.5) * 0.0005;
            temp.push({ x, y, z, size, speed, xSpeed, ySpeed });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        particles.forEach((p, i) => {
            p.y += p.ySpeed;
            p.x += p.xSpeed;

            // Simple bounds check relative to initial pos would be better but this keeps them drifting
            if (p.y > 5 || p.y < -5) p.ySpeed *= -1;
            if (p.x > 5 || p.x < -5) p.xSpeed *= -1;

            dummy.position.set(p.x, p.y, p.z);
            dummy.scale.set(1, 1, 1);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <sphereGeometry args={[0.005, 8, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
        </instancedMesh>
    );
}

function Fog() {
    // Adjusted fog to be more visible but not overwhelming
    return <fog attach="fog" args={['#1a1a2e', 2, 12]} />;
}

export default function RoomAtmosphere() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 2,
        }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true }}>
                <Fog />
                <ambientLight intensity={0.1} />
                <DustParticles count={150} />
            </Canvas>
        </div>
    );
}
