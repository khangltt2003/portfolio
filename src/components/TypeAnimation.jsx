import { useEffect, useState } from "react";

const TypeAnimation = ({ text, delay, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const typingInterval = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(typingInterval);
    };
  }, [text, delay, speed]);

  return <p className="text-normal">{displayText}</p>;
};

export default TypeAnimation;
