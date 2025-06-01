import React, { useState, useEffect, useRef } from 'react';

export default function Test() {
  const [showB, setShowB] = useState(false);
  const refB = useRef<HTMLDivElement>(null);
  const refA = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        refB.current &&
        !refB.current.contains(event.target as Node) &&
        refA.current &&
        !refA.current.contains(event.target as Node)
      ) {
        setShowB(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4 relative">
      {/* Thẻ A */}
      <div
        ref={refA}
        className="bg-blue-500 text-white p-4 cursor-pointer inline-block"
        onClick={() => setShowB((prev) => !prev)}
      >
        Click vào A để mở/đóng B
      </div>

      {/* Thẻ B */}
      {showB && (
        <div
          ref={refB}
          className="absolute left-0 mt-2 p-4 bg-white border border-gray-300 shadow-md"
        >
          Đây là B - click ngoài sẽ đóng
        </div>
      )}
    </div>
  );
}