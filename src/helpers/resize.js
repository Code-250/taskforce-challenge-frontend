import { useState, useEffect } from 'react';

const Resize = () => {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleSize);
    handleSize();
    return () =>
      window.removeEventListener('resize', handleSize());
  }, []);
  return size;
};

export default Resize;
