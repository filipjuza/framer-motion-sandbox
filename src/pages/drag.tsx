import { useRef } from "react";
import { motion } from "framer-motion";

export default function Keyframes() {
  const dragContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        className="rounded-2xl bg-zinc-700 p-24"
        ref={dragContainerRef}
      >
        <motion.div
          className="box drag cursor-grab rounded-2xl bg-zinc-50 shadow-lg"
          drag
          dragConstraints={dragContainerRef}
        ></motion.div>
      </motion.div>
    </div>
  );
}
