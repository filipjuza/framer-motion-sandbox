import { useState } from "react";
import { motion } from "framer-motion";

export default function Keyframes() {
  const [show, setShow] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        className="absolute left-2 top-40 rounded border border-slate-300 px-5 py-2 text-amber-50"
        onClick={() => setShow((s) => !s)}
      >
        show
      </button>

      {show && (
        <motion.div
          className="box bg-amber-50"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        ></motion.div>
      )}
    </div>
  );
}
