'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function VaporGrid() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      mat.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color('#ff2e97') },
      uColorB: { value: new THREE.Color('#00f0ff') },
    }),
    []
  );

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[60, 60, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        transparent
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec2 vUv;
          void main() {
            vec2 uv = vUv * 40.0;
            uv.y += uTime * 2.0;
            vec2 grid = abs(fract(uv) - 0.5);
            float line = min(grid.x, grid.y);
            float glow = 1.0 - smoothstep(0.0, 0.05, line);
            float fade = 1.0 - smoothstep(0.0, 0.7, vUv.y);
            vec3 col = mix(uColorA, uColorB, vUv.y);
            gl_FragColor = vec4(col * glow * fade, glow * fade * 0.8);
          }
        `}
      />
    </mesh>
  );
}

function VaporSun() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <mesh ref={ref} position={[0, 2, -8]}>
      <circleGeometry args={[2.5, 64]} />
      <shaderMaterial
        transparent
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          void main() {
            vec2 uv = vUv - 0.5;
            float d = length(uv);
            vec3 top = vec3(1.0, 0.18, 0.59);
            vec3 bot = vec3(1.0, 0.9, 0.43);
            vec3 col = mix(bot, top, vUv.y);
            float stripes = step(0.5, fract(vUv.y * 12.0 - 0.5));
            float mask = smoothstep(0.5, 0.48, d);
            float lower = step(vUv.y, 0.5) * stripes;
            col *= mix(mask, mask * lower, step(vUv.y, 0.5));
            float alpha = mask;
            gl_FragColor = vec4(col, alpha);
          }
        `}
      />
    </mesh>
  );
}

function Particles({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = Math.random() * 20 - 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      const pos = ref.current.geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        pos.array[i * 3 + 1] += 0.01;
        if (pos.array[i * 3 + 1] > 15) pos.array[i * 3 + 1] = -5;
      }
      pos.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#00f0ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function VaporBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014] via-[#1a0033] to-[#05000f]" />
      <Canvas
        camera={{ position: [0, 1, 8], fov: 70 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <VaporSun />
        <VaporGrid />
        <Particles />
        <fog attach="fog" args={['#0a0014', 5, 25]} />
      </Canvas>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 4px)',
        }}
      />
    </div>
  );
}
