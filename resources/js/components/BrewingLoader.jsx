import { useEffect, useState } from 'react';

const BrewingLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fillTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fillTimer);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(fillTimer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(onComplete, 800);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-amber-300">

      {/* Circular Progress Bar */}
      <div className="relative w-32 h-32">
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#fde68a"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#92400e"
            strokeWidth="10"
            fill="none"
            strokeDasharray="282.6"
            strokeDashoffset={282.6 - (progress / 100) * 282.6}
            className="transition-all duration-300 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl font-bold text-amber-900">{progress}%</p>
        </div>
      </div>

      {/* Brewing Text */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold text-amber-900">
          {progress < 100 ? "Brewing your coffee..." : "Done!"}
        </h2>
      </div>
    </div>
  );
};

export default BrewingLoader;