import { motion } from "framer-motion";
import React, { useEffect } from "react";

const transition = (OgComponent) => {
  const TransitionComponent = () => {
    useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, []);

    const handleAnimationComplete = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    return (
      <>
        <OgComponent />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.875, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{
            scaleY: 0,
            onComplete: handleAnimationComplete,
          }}
          transition={{
            delay: 0.25,
            duration: 0.875,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </>
    );
  };

  return TransitionComponent;
};

export default transition;
