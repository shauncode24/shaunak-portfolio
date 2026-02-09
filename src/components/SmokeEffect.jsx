import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SmokeParticles({ count = 20 }) {
    const meshRef = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 1.5;
            const y = Math.random() * 8;
            const z = (Math.random() - 0.5) * 2;
            const size = 2 + Math.random() * 3;
            const speed = 0.005 + Math.random() * 0.015;
            const rotationSpeed = (Math.random() - 0.5) * 0.01;
            const driftSpeed = (Math.random() - 0.5) * 0.01;
            temp.push({ x, y, z, size, speed, rotationSpeed, driftSpeed });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    const smokeTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0.3, 'rgba(100, 100, 110, 0.2)');
        gradient.addColorStop(0.6, 'rgba(80, 80, 90, 0.1)');
        gradient.addColorStop(0.9, 'rgba(60, 60, 70, 0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);
        return new THREE.CanvasTexture(canvas);
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        particles.forEach((p, i) => {
            p.y += p.speed;
            p.x += p.driftSpeed + Math.sin(time + i) * 0.005;

            if (p.y > 10) {
                p.y = 0;
                p.x = (Math.random() - 0.5) * 1.5;
            }

            const progress = p.y / 10;
            const scale = p.size * (1 + progress * 3);

            dummy.position.set(p.x, p.y - 4, p.z);
            dummy.scale.set(scale, scale, 1);
            dummy.rotation.z += p.rotationSpeed;
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial
                map={smokeTexture}
                transparent
                depthWrite={false}
                blending={THREE.NormalBlending}
                opacity={0.7}
            />
        </instancedMesh>
    );
}

function FireParticles({ count = 30 }) {
    const meshRef = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 2;
            const y = Math.random() * 10;
            const z = (Math.random() - 0.5) * 2;
            const size = 0.02 + Math.random() * 0.08; // Much smaller
            const speed = 0.01 + Math.random() * 0.02; // Slower
            const driftSpeed = (Math.random() - 0.5) * 0.01;
            temp.push({ x, y, z, size, speed, driftSpeed });
        }
        return temp;
    }, [count]);

    // Create a circular glow texture for the fire embers
    const fireTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 200, 50, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 100, 0, 0.8)');
        gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(canvas);
    }, []);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        particles.forEach((p, i) => {
            p.y += p.speed;
            p.x += p.driftSpeed + Math.sin(time + i) * 0.01;

            if (p.y > 10) {
                p.y = 0;
                p.x = (Math.random() - 0.5) * 2;
            }

            const progress = p.y / 10;
            const scale = p.size * (1 - progress * 0.5);

            dummy.position.set(p.x, p.y - 4, p.z + 1);
            dummy.scale.set(scale, scale, 1);
            dummy.rotation.z += 0.05;
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial
                map={fireTexture}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </instancedMesh>
    );
}

export default function FireplaceEffects({ style, className }) {
    const defaultStyle = {
        position: 'absolute',
        top: '62%',
        left: '50%',
        transform: 'translate(-50%, -100%)',
        width: '1000px',
        height: '1000px',
        pointerEvents: 'none',
        zIndex: 10,
    };

    return (
        <div
            className={className}
            style={{ ...defaultStyle, ...style }}
        >
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }} alpha={true}>
                <SmokeParticles count={25} />
                <FireParticles count={40} />
            </Canvas>
        </div>
    );
}

