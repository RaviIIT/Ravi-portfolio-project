// TypingEffect.jsx
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = ({ texts }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: texts,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [texts]);

  return <span ref={typedRef}></span>;
};

export default TypingEffect;
