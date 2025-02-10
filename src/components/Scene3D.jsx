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
      camera={{ position: [0, 0, 800] }}
    >
      <Suspense fallback={<Fallback />}>
        <PerspectiveCamera makeDefault position={[20, 80, 800]} />
        
        {/* Lights */}
        <ambientLight intensity={.1} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={3}
          color="#FEF9CB"
        />
        <directionalLight 
          position={[-10, -10, -5]} 
          intensity={3}
          color="#FEF9CB"
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