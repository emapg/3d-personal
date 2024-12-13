import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-xl font-semibold text-indigo-600">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;