import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import Model from './Model';
import Loader from '../common/Loader';

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ height: '100vh' }}
      className="w-full"
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={false} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default Scene;