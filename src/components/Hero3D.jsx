import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingShape() {
  const meshRef = useRef();

  // useFrame corre en cada fotograma (60 veces por segundo). delta = tiempo
  // desde el fotograma anterior — usarlo hace que el giro sea igual de rápido
  // sin importar si la computadora del visitante es lenta o rápida.
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.25;
  });

  return (
    // position={[0, 0, 0]} ahora queda centrada DENTRO de este canvas más angosto,
    // que a su vez solo ocupa la mitad derecha de la pantalla — así la figura
    // aparece claramente a un lado, sin competir con el texto.
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.6, 0]} />
      <meshStandardMaterial color="#4C7DFF" flatShading />
    </mesh>
  );
}

function Hero3D() {
  return (
    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <directionalLight position={[-5, -3, 2]} intensity={0.4} color="#38BDF8" />
        <RotatingShape />
      </Canvas>
    </div>
  );
}

export default Hero3D;