import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Mesh } from 'three';

const Model = () => {
  const meshRef = useRef<Mesh>(null);
  const [springs] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 280, friction: 60 },
  }));

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      scale={springs.scale}
      onPointerOver={() => springs.scale.start(1.2)}
      onPointerOut={() => springs.scale.start(1)}
    >
      <dodecahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial
        color="#4338ca"
        metalness={0.7}
        roughness={0.2}
      />
    </animated.mesh>
  );
};

export default Model;