import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function LightDirection({ start, end, color = "red" }) {
  // Scale up the direction vector to make lines longer
  const direction = [
    end[0] - start[0],
    end[1] - start[1],
    end[2] - start[2]
  ];
  const scaleFactor = 400; // Increase this to make lines longer
  const extendedEnd = [
    start[0] + direction[0] * scaleFactor,
    start[1] + direction[1] * scaleFactor,
    start[2] + direction[2] * scaleFactor
  ];

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([...start, ...extendedEnd])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} linewidth={10} /> {/* Increase linewidth */}
    </line>
  );
}

function Model({ url, scale = 1.5, position, rotation }) {
  const { scene } = useGLTF(url);
  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={position}
      rotation={rotation}
    />
  );
}

function Fallback() {
  return null;
}

export function Scene3D() {
  return (
    <Canvas 
      style={{ 
        height: '40vh',
        width: '100%',
        background: 'transparent'
      }}
      camera={{ position: [0, 0, 800] }}
    >
      <Suspense fallback={<Fallback />}>
        <PerspectiveCamera makeDefault position={[20, 80, 800]} />
        
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={20}
          color="#786101"
        />
        <directionalLight 
          position={[-10, -10, -5]} 
          intensity={10}
          color="#F2984E"
        />

        {/* Light direction indicators */}
        <LightDirection 
          start={[10, 10, 5]} 
          end={[0, 0, 0]} 
          color="#FF0000"
        />
        <LightDirection 
          start={[-10, -10, -5]} 
          end={[0, 0, 0]} 
          color="#FFD700"
        />

        <Stage
          environment="city"
          intensity={.2}
          adjustCamera={false}
        >
          <Model 
            url="/toothbrush.1.glb" 
            position={[-30, 150, 20]}
            scale={3.3}
            rotation={[0, -.9, .5]}
          />
          <Model 
            url="/tube_3d.glb" 
            position={[-40, -100, -80]}
            scale={250}
            rotation={[0, -.8, -.4]}
          />
        </Stage>
        <OrbitControls 
          enableZoom={false} 
          autoRotate={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload('/toothbrush.1.glb');
useGLTF.preload('/tube_3d.glb'); 