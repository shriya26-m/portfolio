import { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-purple-500 pointer-events-none blur-md z-50"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
    />
  );
};

export default Cursor;