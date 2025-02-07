import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

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
      camera={{ position: [0, -100, 30] }}
    >
      <Suspense fallback={<Fallback />}>
        <PerspectiveCamera makeDefault position={[50, 50, 650]} />
        <Stage
          environment="city"
          intensity={0.6}
          adjustCamera={false}
        >
          <Model 
            url="/toothbrush.1.glb" 
            position={[80, 100, 0]}
            scale={3}
            rotation={[Math.PI / 10, 1, Math.PI / 10]}
        
          />
          <Model 
            url="/tube_3d.glb" 
            position={[-40, -80, 120]}
            scale={200}
            rotation={[0, Math.PI / 3, -Math.PI / 6]}
          />
        </Stage>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          target={[0, 0, 0]}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload('/toothbrush.1.glb');
useGLTF.preload('/tube_3d.glb'); 