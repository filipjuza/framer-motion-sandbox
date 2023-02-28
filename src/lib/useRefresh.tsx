import { useState } from "react";
import { motion } from "framer-motion";

export function useRefresh() {
  const [count, setCount] = useState(0);

  const refreshButton = (
    <motion.button
      className="fixed right-5 bottom-5 text-4xl"
      onClick={() => setTimeout(() => setCount(c => c + 1), 250)}
      initial={{ scaleY: -1 }}
      whileTap={{ scale: 0.95, y: 1 }}
    >
      🔄
    </motion.button>
  );

  return {
    refreshButton,
    key: count,
  };
}